var gulp    = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concat  = require('gulp-concat'),
    //browsersync = require('browser-sync').create();
    config  = module.exports;

// SCSS & CSS Path
config.sassSrcDir    = './scss';
config.cssPath       = './css';

// Vendor CSS Function
gulp.task('vendor-css', done => {
    gulp.src(config.sassSrcDir + '/vendor/*.css')
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.cssPath));
    done();
});

// Main CSS Function
gulp.task('main-css', done => {
    var baseStream = gulp.src(config.sassSrcDir + '/base/main.scss')
        .pipe(sass({
            sourceComments: 'map',
            outputStyle: 'expanded' // expanded or compressed
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.cssPath))
    done();
});


// Browsersync Tasks
// function browsersyncServe(cb){
//   browsersync.init({
//     server: {
//       baseDir: '.'
//     }
//   });
//   cb();
// }

// function browsersyncReload(cb){
//   browsersync.reload();
//   cb();
// }

// gulp.task('build-scss:watch', () => {
//     gulp.watch('./scss/**/*.scss*',  (done) => {
//         gulp.series(
//             gulp.parallel('vendor-css', 'main-css'), browsersyncReload, browsersyncServe
//         )
//         (done);
//     });
// });

// Gulp Task Merged Function
gulp.task('build-scss', gulp.series(
    gulp.parallel('vendor-css', 'main-css')
));

gulp.task('build-scss:watch', () => {
    gulp.watch('./scss/**/*.scss*',  (done) => {
        gulp.series(
            gulp.parallel('vendor-css', 'main-css')
        )
        (done);
    });
});
