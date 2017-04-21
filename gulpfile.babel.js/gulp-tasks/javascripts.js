var gulp = require('gulp');

//var babel = require('gulp-babel');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var livereload = require('gulp-livereload');
 
// gulp.task('javascripts', () => {
//     gulp.src('src/js/**/*.js')
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(gulp.dest('public/js/'))
//         .pipe(livereload());
// });


gulp.task('javascripts', () => {
    
  var production = util.env.type === 'production';
  
  var b = browserify({
    entries: 'src/js/index.js',
    debug: !production,
    transform: [babelify.configure({
      presets: ['es2015', 'es2016', 'es2017', 'react'],
      "plugins": ["transform-object-rest-spread"]
    })]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      // Add other gulp transformations (eg. uglify) to the pipeline here.
    .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(livereload());
});