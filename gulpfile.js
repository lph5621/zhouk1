var gulp = require("gulp");
var sass = require("gulp-sass");//编译scss

gulp.task("devSass",function(){
    return gulp.src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
})
gulp.task("watch",function(){
    return gulp.watch("./src/scss/*.scss",gulp.series("devSass"))
})