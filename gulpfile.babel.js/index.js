//Tasks have been seperated on each own, under /tasks/{task}.js
//Simply require or import(if ES6 supported) it here and your golden :)

require('./gulp-tasks/styles');
require('./gulp-tasks/javascripts');
require('./gulp-tasks/views');
require('./gulp-tasks/server');
require('./gulp-tasks/watch');
require('./gulp-tasks/helper');