/**
 * Created by Administrator on 2016-5-17.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');



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

gulp.task('concatCSS', ['clean'], function () {
    return gulp.src(['CSS/{common,Buttons,Forms,Girds,Tables}.scss','JS/*.scss','!CSS/demo.scss'])
        .pipe(concat('main.scss'))
        .pipe(gulp.dest('./'));
});

//dev css
gulp.task('stylesDev',['concatCSS'], function () {
    return gulp.src('main.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'companded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('concatJS', ['clean'], function () {
    return gulp.src(['JS/*.js','!JS/main.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('JS'));
});

//dev
gulp.task('doStyleDev', function () {
    /* watch .sass|.scss files */
    gulp.watch('{CSS,JS}/*.scss', ['stylesDev','demoStylesDev']);
});

gulp.task('dev', ['doStyleDev', 'browser-sync','concatJS'], function () {
    gulp.watch(['index.html', '*.css', 'JS/*.js'],['concatJS']).on('change', reload);
});

//release
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

//release
gulp.task('copy', ['clean', 'concatJS'], function () {
    return gulp.src(['main.css', 'JS/main.js'])
        .pipe(gulp.dest('dist/'));
});

//release
gulp.task('minifyJs', ['copy'], function () {
    return gulp.src('dist/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//release
gulp.task('minifyCss', ['copy'], function () {
    return gulp.src('dist/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

//release
gulp.task('release', ['minifyJs', 'minifyCss'], function () {

});