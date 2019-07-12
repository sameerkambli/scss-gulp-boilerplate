var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    _       = require('underscore'),
    config  = module.exports = _.clone(require('../config/config'));

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
            outputStyle: 'compact'
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.cssPath))
    done();
});

// App CSS Function
gulp.task('app-css', done => {
    gulp.src(config.sassSrcDir + '/application/' + config.app + '.scss')
        .pipe(plumber())
        .pipe(sass({
            sourceComments: 'map',
            outputStyle: 'compact',
            includePaths: [
                require('node-bourbon').includePaths
            ]
        }))
        .pipe(gulp.dest(config.cssPath))
    done();
});

// Gulp Task Merged Function
gulp.task('build-scss', gulp.series(
    gulp.parallel('vendor-css', 'main-css', 'app-css')
));

gulp.task('build-scss:watch', () => {
    gulp.watch('./scss/**/*.scss*', (done) => {
        gulp.series(
            gulp.parallel('vendor-css', 'main-css', 'app-css')
        )
        (done);
    });
});
