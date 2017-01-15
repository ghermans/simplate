var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var merge = require('merge-stream');

gulp.task('default', function(){
    //
});

gulp.task('assets', function(){
    var jquery = gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('public/js'));
        
    var normalize = gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(rename('_normalize.scss'))
        .pipe(gulp.dest('assets/sass'));

    return merge(jquery, normalize);
});

gulp.task('sass', function () {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass({
            // outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/*.scss', ['sass']);
});
