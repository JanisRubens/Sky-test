var gulp = require('gulp');  
var nodemon = require('gulp-nodemon');  

gulp.task('server',function(){  
    nodemon({
        'script': 'server.js',
        'ignore': 'src/js/*.js'
    });
});