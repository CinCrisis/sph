var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("Hurray—you create a Gulp task.");
});

gulp.task('html', function() {
  console.log("Something useful to HTML!");
});

gulp.task('styles', function() {
  console.log("Sass or Post CSS tasks running here!");
});


gulp.task('watch', function() {

  watch('./app/index.html', function(){
    gulp.start('html');
  });

watch('./app/assets/styles/**/*.css', function() {
  gulp.start('styles');
})

});
