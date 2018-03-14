//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

//server
var port = 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route controllers
var htmlController = require("./App/Routing/htmlRoutes.js");
var apiController = require("./App/Routing/apiRoutes.js");

htmlController.survey(app);
htmlController.home(app);
apiController.getAPI(app);
apiController.postAPI(app);

//listen
app.listen(port, function () {
    console.log("App listening at port: " + port)
});



