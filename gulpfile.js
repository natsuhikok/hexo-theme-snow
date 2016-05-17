const gulp        = require('gulp');
const sass        = require('gulp-sass');
const plumber     = require('gulp-plumber');
const browsersync = require('browser-sync');
/////////////////////////////////////////
// SCSS
/////////////////////////////////////////
gulp.task('sass', () => {
  gulp.src('source/scss/all.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('source/css/'))
    .pipe(browsersync.reload({stream: true}));
});
gulp.task('watch', () => {
  gulp.watch(['source/scss/**'],['sass']);
});
/////////////////////////////////////////
// Browser-sync
/////////////////////////////////////////
gulp.task('server', () => {
  browsersync({
    files: "layout/**",
    browser: 'FirefoxDeveloperEdition',
    proxy: "localhost:4000"
  });
});

gulp.task('default',['watch', 'server']);