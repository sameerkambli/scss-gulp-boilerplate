var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    _       = require('underscore'),
    config  = module.exports;

// SCSS & CSS Path
config.sassSrcDir    = './scss';
config.cssPath       = './css';

// Vendor CSS Function
gulp.task('vendor-css', function () {
    gulp.src(config.sassSrcDir + '/vendor/*.css')
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.cssPath));
});

// App CSS Function
gulp.task('app-css', function () {
    var baseStream = gulp.src(config.sassSrcDir + '/base/main.scss')
        .pipe(plumber())
        .pipe(sass({
            sourceComments: 'map',
            outputStyle: 'compact'
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.cssPath))
});

// Gulp Task Merged Function
gulp.task('build-scss', function () {
    gulp.start('vendor-css', 'app-css');
});

// Gulp Watch Command
gulp.task('build-scss:watch', function() {
    gulp.watch('./scss/**/*.*', ['build-scss']);
});
