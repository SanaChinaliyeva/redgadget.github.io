var gulp = require('gulp'),
        minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  gulp.src('./dist/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['minify-css']);

