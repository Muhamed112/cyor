const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", () => {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task("html", () => {
  return gulp
    .src("./*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
  return gulp
    .src("./js/*.js")
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task(
  "start",
  gulp.series("sass", function () {
    browserSync.init({
      server: {
        baseDir: "./",
        index: "./index.html",
      },
    });

    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("js/*.js").on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("start"));

gulp.task("build", gulp.series(["sass", "html", "js"]));
