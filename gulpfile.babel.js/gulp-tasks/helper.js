var gulp = require('gulp');

gulp.task('serve', ['server','watch']);

gulp.task('build', ['styles','javascripts'])