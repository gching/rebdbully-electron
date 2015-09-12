'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');


var paths = {
  jsxCodeToTranspile: [
      'app/poutine/*.jsx',
  ],
  jsxCodeDest: 'app/poutine'
};

var jsxTranspileTask = function () {
    return gulp.src(paths.jsxCodeToTranspile)
    .pipe(babel({modules: 'amd'}))
    .pipe(gulp.dest(paths.jsxCodeDest));
};

gulp.task('jsx-transpile', jsxTranspileTask);
gulp.task('jsx-transpile-watch', function(){
  gulp.watch(paths.jsxCodeToTranspile, ['jsx-transpile'])
});
