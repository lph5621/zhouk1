var gulp = require("gulp");
var sass = require("gulp-sass");//编译scss
var server = require("gulp-webserver");//启动服务

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
        port:9898,
        open:true,
        livereload:true,
        middleware:function(req,res,next){

        }
    }))
})