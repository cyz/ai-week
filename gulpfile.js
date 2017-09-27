var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css'); 

var css  = [
    './css/bootstrap.css',
    './css/animate.css',
    './css/bg.css',
    './css/owl.carousel.css',
    './css/magnific-popup.css',
    './css/jquery.countdown.css',
    './css/style.css',
    './css/colors/*.*'
];

var js = [
    './js/jquery.min.js',
    './js/bootstrap.min.js',
    './js/jquery.isotope.min.js',
    './js/easing.js',
    './js/owl.carousel.js',
    './js/jquery.countTo.js',
    './js/wow.min.js',
    './js/jquery.magnific-popup.min.js',
    './js/enquire.min.js',
    './js/jquery.stellar.min.js',
    './js/jquery.plugin.js'
];


gulp.task('js', function(){
    gulp.src(js)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
 });
 
 gulp.task('css', function(){
    gulp.src(css)
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('dist/css/'));
 });
 
 gulp.task('default',['css','js'],function(){
 });