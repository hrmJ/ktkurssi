// Gulp.js configuration
var 
    // modules
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    sass = require('gulp-ruby-sass'),
    minify = require('gulp-minify'),
    autoprefixer = require('gulp-autoprefixer'),
    layout = require('gulp-file-wrapper'),


    //development mode?
    devBuild = (process.env.NODE_ENV !== 'production'),

    //folders
    folder = {
        src: 'src/',
        build: 'public/'
    }

;



// PHP-tiedostojen siirto

gulp.task("js",function(){
    var jsbuild = gulp.src(folder.src + "impressjs/*.js").pipe(deporder()).pipe(concat('main.js').pipe(minify()));
    return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
});


gulp.task("css",function(){
        gulp.src(folder.src + "sass/**/*.scss")
    	sass(folder.src + "sass/**/*.scss")
		.on('error', sass.logError)
		.pipe(gulp.dest(folder.build + "stylesheets/"))
});


gulp.task("html",function(){
        gulp.src(folder.src + "luennot/**/*.html")
        .pipe(layout(folder.src + "impressjs/template.html"))
		.pipe(gulp.dest(folder.build + "luennot/"))
});

gulp.task("watch",function(){

    gulp.watch(folder.src + "src/impressjs/*.js",["js"]);
    gulp.watch(folder.src + "sass/**/*",["css"]);
    gulp.watch(folder.src + "/**/*.html",["html"]);
    gulp.watch(folder.src + "/luennot/**/*.html",["html"]);

});

gulp.task('run',['js','css','html']);
gulp.task('default',['run','watch']);
