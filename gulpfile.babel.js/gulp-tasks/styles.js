var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload'); 

gulp.task('styles', function() {
    gulp.src('src/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'))
        .pipe(livereload());
});