var gulp = require("gulp"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass")(require("sass")),
    pug = require("gulp-pug"),
    watch = require("gulp-watch"),
    livereload = require("gulp-livereload");



// Html task
gulp.task("pug", function () {
  return gulp
    .src("./src/pug/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});


// css task
gulp.task("sass", function () {
  return gulp
    .src("./src/sass/style.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: true,
      })
    )
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

// css rtl task
gulp.task("sass-rtl", function () {
  return gulp
    .src("./src/sass/rtl/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: true,
      })
    )
    .pipe(concat("rtl-style.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

// js task
gulp.task("js", function () {
  return gulp
    .src("./src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

// watch task
gulp.task("default", function () {
  require("./server.js");
  livereload.listen();
  livereload({ start: true })
  gulp.watch("./src/pug/**/*.pug", gulp.series("pug"));
  // gulp.watch("./src/pug/**/*.pug", gulp.series("pug-ar"));
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass-rtl"));
  gulp.watch("./src/js/**/*.js", gulp.series("js"));
  return;
});
