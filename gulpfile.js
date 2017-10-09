/**
 * Created by lenovo on 2017/10/9.
 */
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');
var webserver = require('gulp-webserver');
gulp.task('minifycss', function () {
    return gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({message: 'css task ok'}));
});

gulp.task('uglify', function () {
    return gulp.src('js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({message: "js task ok"}));
});
gulp.task('webserver', function () {
    gulp.src('./dist')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            open: true,
            directoryListing: {
                enable: true,
                path: './dist'
            }
        }))
})