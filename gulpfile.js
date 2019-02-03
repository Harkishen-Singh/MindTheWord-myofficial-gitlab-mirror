var gulp = require('gulp'),
  del = require('del'),
  jspm = require('gulp-jspm'),
  rename = require('gulp-rename'),
  runSequence = require('run-sequence'),
  minify = require('gulp-minify'),
  eslint = require('gulp-eslint'),
  gulpIf = require('gulp-if'),
  imagemin = require('gulp-imagemin')
  ;

const chromePath = './lib/chrome',
  firefoxPath = './lib/firefox',
  corePath = './lib/core';

gulp.task('default', function() {
  console.log('Please use the following gulp tasks: watch, clean, bundle, build');
});

gulp.task('clean', function() {
  return del('./dist', {
    force: true
  });
});

gulp.task('bundle-options-chrome', function() {
  return gulp.src(chromePath + '/scripts/controllers/options.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('options.js'))
    .pipe(gulp.dest(chromePath));
});

gulp.task('bundle-options-firefox', function() {
  return gulp.src(firefoxPath + '/scripts/controllers/options.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('options.js'))
    .pipe(gulp.dest(firefoxPath));
});

gulp.task('bundle-popup-chrome', function() {
  return gulp.src(chromePath + '/scripts/controllers/popup.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('popup.js'))
    .pipe(gulp.dest(chromePath));
});

gulp.task('bundle-popup-firefox', function() {
  return gulp.src(firefoxPath + '/scripts/controllers/popup.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('popup.js'))
    .pipe(gulp.dest(firefoxPath));
});

gulp.task('bundle-event-chrome', function() {
  return gulp.src(chromePath + '/scripts/eventPage.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('eventPage.js'))
    .pipe(gulp.dest(chromePath));
});

gulp.task('bundle-event-firefox', function() {
  return gulp.src(firefoxPath + '/scripts/eventPage.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('eventPage.js'))
    .pipe(gulp.dest(firefoxPath));
});

gulp.task('bundle-content-chrome', function() {
  return gulp.src(chromePath + '/scripts/mtw.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('mtw.js'))
    .pipe(gulp.dest(chromePath));
});

gulp.task('bundle-content-firefox', function() {
  return gulp.src(firefoxPath + '/scripts/mtw.js')
    .pipe(jspm({
      selfExecutingBundle: true
    }))
    .pipe(rename('mtw.js'))
    .pipe(gulp.dest(firefoxPath));
});

gulp.task('watch', ['bundle-options-chrome', 'bundle-options-firefox', 'bundle-popup-chrome', 'bundle-popup-firefox',
  'bundle-content-chrome', 'bundle-content-firefox', 'bundle-event-chrome', 'bundle-event-firefox'], function() {
  gulp.watch(chromePath + '/scripts/controllers/options.js', ['bundle-options-chrome']);
  gulp.watch(firefoxPath + '/scripts/controllers/options.js', ['bundle-options-firefox']);
  gulp.watch(chromePath + '/scripts/controllers/popup.js', ['bundle-popup-chrome']);
  gulp.watch(firefoxPath + '/scripts/controllers/popup.js', ['bundle-popup-firefox']);
  gulp.watch(chromePath + '/scripts/mtw.js', ['bundle-content-chrome']);
  gulp.watch(firefoxPath + '/scripts/mtw.js', ['bundle-content-firefox']);
  gulp.watch(chromePath + '/scripts/eventPage.js', ['bundle-event-chrome']);
  gulp.watch(firefoxPath + '/scripts/eventPage.js', ['bundle-event-firefox']);
  gulp.watch(chromePath + '/scripts/services/*.js', ['bundle-content-chrome', 'bundle-event-chrome']);
  gulp.watch(firefoxPath + '/scripts/services/*.js', ['bundle-content-firefox', 'bundle-event-firefox']);
  gulp.watch(chromePath + '/scripts/utils/defaultStorage.js', ['bundle-options-chrome','bundle-event-chrome']);
  gulp.watch(firefoxPath + '/scripts/utils/defaultStorage.js', ['bundle-options-firefox','bundle-event-firefox']);

});

gulp.task('minify-chrome', function () {
  return gulp.src(chromePath + '/*.js')
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true,
      mangle: false
    }))
    .pipe(gulp.dest('./dist/chrome'));
});

gulp.task('minify-firefox', function () {
  return gulp.src(firefoxPath + '/*.js')
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true,
      mangle: false
    }))
    .pipe(gulp.dest('./dist/firefox'));
});

gulp.task('copy-dist', function () {
  gulp.src(corePath + '/_locales/**/*').pipe(gulp.dest('./dist/chrome/_locales/')).pipe(gulp.dest('./dist/firefox/_locales/'));
  gulp.src(corePath + '/assets/**/*').pipe(gulp.dest('./dist/chrome/assets/')).pipe(gulp.dest('./dist/firefox/assets/'));
  gulp.src(corePath + '/styles/**/*').pipe(gulp.dest('./dist/chrome/styles/')).pipe(gulp.dest('./dist/firefox/styles/'));
  gulp.src(corePath + '/common/*').pipe(gulp.dest('./dist/chrome/common/')).pipe(gulp.dest('./dist/firefox/common/'));
  gulp.src(chromePath + '/views/**/*').pipe(gulp.dest('./dist/chrome/views/'));
  gulp.src(firefoxPath + '/views/**/*').pipe(gulp.dest('./dist/firefox/views/'));
  gulp.src(chromePath + '/manifest.json').pipe(gulp.dest('./dist/chrome/'));
  return gulp.src(firefoxPath + '/manifest.json').pipe(gulp.dest('./dist/firefox/'));
});

gulp.task('esLint',()=>{
  gulp.src('./lib/**/scripts/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', function(err) {
      console.log('Run "gulp-fix" in terminal to fix these errors');
      process.exit();
    });
});

gulp.task('compress-images', () => {
  gulp.src('lib/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('build', function() {
  runSequence('clean', 'esLint', 'compress-images',
    ['bundle-content-chrome', 'bundle-content-firefox', 'bundle-options-chrome', 'bundle-options-firefox', 'bundle-event-chrome',
      'bundle-event-firefox', 'bundle-popup-chrome', 'bundle-popup-firefox'], 'minify-chrome', 'minify-firefox', 'copy-dist');
});

gulp.task('local-build', function() {
  runSequence('clean',
    ['bundle-content-chrome', 'bundle-content-firefox', 'bundle-options-chrome', 'bundle-options-firefox',
      'bundle-event-chrome', 'bundle-event-firefox', 'bundle-popup-chrome', 'bundle-popup-firefox']);
});

function isFixed(file) {
  return file.eslint !== null && file.eslint.fixed;
}

gulp.task('fix', function () {
  return gulp.src('./lib/**/scripts/**/*.js')
    .pipe(eslint({fix:true}))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('lib/scripts/')))
    .pipe(eslint.failAfterError());
});
