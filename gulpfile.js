/**
 * Created by Administrator on 2016-5-17.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');

//dev css
gulp.task('stylesDev', function () {
    return gulp.src('main.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'companded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

//dev demo.css
gulp.task('demoStylesDev', function () {
    return gulp.src('CSS/demo.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'companded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('CSS'));
});

//dev start browser
gulp.task('browser-sync', function () {
    browserSync({
        files: "index.html",
        server: {
            baseDir: "./"
        }
    });
});

//release
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('concat', ['clean'], function () {
    return gulp.src('JS/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('JS'));
});

gulp.task('copy', ['clean', 'concat'], function () {
    return gulp.src(['main.css', 'JS/main.js'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('minifyJs', ['copy'], function () {
    return gulp.src('dist/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyCss', ['copy'], function () {
    return gulp.src('dist/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

//dev
gulp.task('doStyleDev', function () {
    /* watch .sass|.scss files */
    gulp.watch('*.+(sass|scss)', ['stylesDev','demoStylesDev']);
});
gulp.task('dev', ['doStyleDev', 'browser-sync'], function () {
    gulp.watch(['index.html', '*.css', 'JS/*.js']).on('change', reload);
});


gulp.task('release', ['minifyJs', 'minifyCss'], function () {

});