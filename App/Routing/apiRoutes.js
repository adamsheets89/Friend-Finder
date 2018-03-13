//require friends.js
var friendsData = require("../Data/friends.js");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

var getAPI = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    })
};

var postAPI = function (app) {
    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        var newFriend = req.body
        friendsData.push(req.body)
        res.json(true)
    })
};

module.exports = {
    getAPI: getAPI,
    postAPI: postAPI
};
