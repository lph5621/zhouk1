var gulp = require("gulp");
var sass = require("gulp-sass");//编译scss
var server = require("gulp-webserver");//启动服务
var concat = require("gulp-concat")//合并


gulp.task("devSass",function(){
    return gulp.src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
})
gulp.task("watch",function(){
    return gulp.watch("./src/scss/*.scss",gulp.series("devSass"))
})

gulp.task("server",function(){
    return gulp.src("./src")
    .pipe(server({
        port:9896,
        open:true,
        livereload:true,
        middleware:function(req,res,next){

        }
    }))
})

gulp.task("concatJs",function(){
    return gulp.src(["./src/js/**/*.js","!./src/js/libs/*.js"])
    .pipe(concat("./src/js/conjs"))
})