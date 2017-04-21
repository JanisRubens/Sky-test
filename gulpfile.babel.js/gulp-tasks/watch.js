var gulp = require('gulp');  
var livereload = require('gulp-livereload'); 

gulp.task('watch', function() {  
    livereload.listen();
    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/js/**/*.js', ['javascripts']);
    gulp.watch('views/**/*.ejs', ['ejs']);
});