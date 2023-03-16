const gulp = require('gulp');
/* Plugins for sass */
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
/* Plugins for Js compiling */
const uglify = require('gulp-uglify');
/* Plugins for Image Compress */
const imageMin = require('gulp-imagemin');
const { parallel } = require('gulp');
/* HTML minfiy */
const htmlMin = require('gulp-htmlmin');

function minifyHtml() {
    return gulp.src('./source/index.html')
    .pipe(htmlMin())
    .pipe(gulp.dest('./build'))
}

function compileSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function compileJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compressImg() {
    return gulp.src('./source/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./build/img'))
}

exports.compileSass = compileSass;
exports.compileJs = compileJs;
exports.compressImg = compressImg;
exports.minifyHtml = minifyHtml;


exports.watch = function() {
    gulp.watch('./source/styles/**/*.scss', {ignoreInitial: false}, compileSass);
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, compileJs);
    gulp.watch('./source/img/*', {ignoreInitial: false}, compressImg);
    gulp.watch('./source/index.html', {ignoreInitial: false}, minifyHtml);
}

exports.default = parallel(compileSass, compileJs, compressImg, minifyHtml)