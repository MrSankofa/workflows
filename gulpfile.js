//bring in the gulp library and assign it to this variable.
//you can now create tasks
var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');

gulp.task('log', function() {
   gutil.log('Workflows are awesome');
});

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
   'components/scripts/rclick.js',
   'components/scripts/pixgrid.js',
   'components/scripts/tagline.js',
   'components/scripts/template.js'
]

//where the original file is located and move it to the following destinationi
gulp.task('coffee', function() {
   gulp.src(coffeeSources[0])
   .pipe(coffee({bare: true})
      .on('error', gutil.log))
   .pipe(gulp.dest('components/scripts'))


   
});

//this is so that any errors do not stop any other gulp task

//This function combines different js files. For launch
//You modularize the different js files in development to find bugs
//Then you combine and minimize everything to save space. 
//The gulp.src(jsSources) must automatically iterate through the array to concatenate
//the files

gulp.task('js', function() {
   gulp.src(jsSources)
   .pipe(concat('script.js')) 
   .pipe(gulp.dest('builds/development/js'))
});