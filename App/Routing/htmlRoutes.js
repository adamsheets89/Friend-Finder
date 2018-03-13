var path = require("path");

// A GET Route to /survey which should display the survey page.
var survey = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/survey.html"));
    })
};

// A default, catch-all route that leads to home.html which displays the home page.
var home = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/home.html"));
    });
}

module.exports = {
    survey: survey,
    home: home
};