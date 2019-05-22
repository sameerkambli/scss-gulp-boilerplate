var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    gutil   = require('gulp-util'),
    _       = require('underscore'),
    config  = module.exports = _.clone(require('../config/config'));

// SCSS & CSS Path
config.sassSrcDir    = './scss';
config.cssPath       = './css';

// Vendor CSS Function
gulp.task('vendor-css', function () {
    gulp.src(config.sassSrcDir + '/vendor/*.css')
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.cssPath));
});

// Main CSS Function
gulp.task('main-css', function () {
    var baseStream = gulp.src(config.sassSrcDir + '/base/main.scss')
        .pipe(plumber())
        .pipe(sass({
            sourceComments: 'map',
            outputStyle: 'compact'
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.cssPath))
});

// App CSS Function
gulp.task('app-css', function () {
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
});

// Gulp Task Merged Function
gulp.task('build-scss', function () {
    gulp.start('vendor-css', 'main-css', 'app-css');
});

// Gulp Watch Command
gulp.task('build-scss:watch', function() {
    gulp.watch('./scss/**/*.*', ['build-scss']);
});
