//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var htmlController = require("./App/Routing/htmlRoutes.js");
// var apiController = require("./App/Routing/apiRoutes.js");

htmlController.survey(app);
htmlController.home(app);
// apiController.API(app);

var friends = require("./App/Data/friends.js")


var port = 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

var API = app.get("/api/friends", function (req, res) {
    res.json(friends)
});


app.listen(port, function () {
    console.log("App listening at port: " + port)
});


//logic


