var gulp    = require('gulp'),
    //sass    = require('gulp-sass');
    sass = require('gulp-sass')(require('sass'));
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    _       = require('underscore'),
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
        .pipe(plumber())
        .pipe(sass({
            sourceComments: 'map',
            outputStyle: 'expanded' // expanded or compressed
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.cssPath))
    done();
});

// Gulp Task Merged Function
gulp.task('build-scss', gulp.series(
    gulp.parallel('vendor-css', 'main-css')
));

gulp.task('build-scss:watch', () => {
    gulp.watch('./scss/**/*.scss*', (done) => {
        gulp.series(
            gulp.parallel('vendor-css', 'main-css')
        )
        (done);
    });
});
