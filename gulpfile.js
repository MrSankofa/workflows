
//bring in the gulp library and assign it to this variable.
//you can now create tasks
var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');

gulp.task('log', function() {
   gutil.log('Workflows are awesome');
});

var coffeeSources = ['components/coffee/tagline.coffee'];

//where the original file is located and move it to the following destinationi
gulp.task('coffee', function() {
   gulp.src(coffeeSources[0])
   .pipe(coffee({bare: true})
      .on('error', gutil.log) 
   .pipe(gulp.dest('components/scripts'))

   )
});

//this is so that any errors do not stop any other gulp task