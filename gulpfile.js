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

gulp.task(
  "start",
  gulp.series("sass", function () {
    browserSync.init({
      server: {
        baseDir: "./",
        index: "./index.html",
        serveStaticOptions: {
          extensions: ["html"],
        },
      },
    });

    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("js/*.js").on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("start"));
exports.build = gulp.series("sass");
