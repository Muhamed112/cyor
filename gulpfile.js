const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const ghPages = require("gulp-gh-pages");

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
gulp.task("build", gulp.series("start"));

gulp.task("deploy", function () {
  return gulp.src("./build/**/*").pipe(ghPages());
});

// exports.build = gulp.series("default");
