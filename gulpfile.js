var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

const SCRIPT_NAME = 'app.js';
const STYLE_NAME = 'app.css';
var paths = {
    src: {
        js: {
            files: './src/js/**/*.js'
        },
        sass: {
            files: './src/sass/**/*.scss'
        }
    },
    dist: {
        js: './dist/js/',
        css: './dist/css/'
    }
};

gulp.task('build', ['sass', 'scripts']);

gulp.task('watch', function () {
    gulp.watch(paths.src.sass.files, ['sass']);
    gulp.watch(paths.src.js.files, ['scripts']);
});

/*
 * Concating and compressing all .scss files in main.css
 */
gulp.task('sass', function() {
    return gulp.src(paths.src.sass.files)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist.css));
});

/*
 * Prefixing css
 */
gulp.task('prefix', function() {
    gulp.src('./dist/css/' + STYLE_NAME)
        .pipe(autoprefixer({
            browsers: ['IE 7', 'iOS 7', 'iOS 6', 'iOS 4', 'last 3 iOS versions', '> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.dist.css));
});

/*
 * Concating and compressing all .js files in main.js
 */
gulp.task('scripts', function() {
  return gulp.src(paths.src.js.files)
    .pipe(sourcemaps.init())
    .pipe(concat(SCRIPT_NAME))
    .pipe(uglify({
        compress: {
            negate_iife: false
        }
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.js))
});

/*
 * Cleaning dist
 */
gulp.task('clean', function () {
    return del(['dist'])
});
