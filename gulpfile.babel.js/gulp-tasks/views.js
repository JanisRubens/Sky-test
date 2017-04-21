var gulp = require('gulp');  
var livereload = require('gulp-livereload'); 

gulp.task('ejs',function(){  
    return gulp.src('views/**/*.ejs')
    .pipe(livereload());
});