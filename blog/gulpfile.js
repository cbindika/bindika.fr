var gulp = require("gulp");
var watch = require("gulp-watch");
var exec = require("child_process").exec;

gulp.task("default", function() {
    // Run local server, open localhost:8000 in your browser
    // exec("php -S localhost:8000 -t output");

    // Generate current version
    // For Windows use: exec('vendor\\bin\\statie generate', function (err, stdout, stderr) {
    exec("./vendor/bin/statie generate source", function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });

    return (
        watch(["source/**/*", "!**/*___jb_tmp___"], { ignoreInitial: false })
        // For the second arg see: https://github.com/floatdrop/gulp-watch/issues/242#issuecomment-230209702
            .on("change", function() {
                // For Windows use: exec('vendor\\bin\\statie generate', function (err, stdout, stderr) {
                exec("./vendor/bin/statie generate source", function(
                    err,
                    stdout,
                    stderr
                ) {
                    console.log(stdout);
                    console.log(stderr);
                });
            })
    );
});