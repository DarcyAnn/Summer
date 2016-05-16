/**
 * Created by Administrator on 2016-5-17.
 */
var gulp = require('gulp'),
    //sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');

gulp.task('clean', function(){
    return gulp.src('dist/',{read: false})
        .pipe(clean());
});

gulp.task('concat',['clean'], function() {
    return gulp.src('JS/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['clean','concat'], function(){
    return gulp.src(['main.css','dist/main.js'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('minifyJs',['copy'], function (cb) {
    return gulp.src('dist/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyCss', ['copy'], function() {
    return gulp.src('dist/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});


gulp.task('release',['minifyJs', 'minifyCss'], function() {

});