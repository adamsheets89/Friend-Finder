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
        var newFriend = req.body;
        console.log(newFriend);

        console.log("name: " + newFriend.name);
        console.log("photo: " + newFriend.photo);
        console.log("answers: " + newFriend.scores);

        //go through friendsData and check each score array against the new user's score array

        var differenceArray = [];
        for (var i = 0; i < friendsData.length; i++) {
            var friendCheck = friendsData[i];
            totalDifference = 0;

            for (var j = 0; j < friendCheck.scores.length; j++)
                totalDifference += Math.abs(friendCheck.scores[j] - newFriend.scores[j])

            differenceArray.push(totalDifference);
            console.log("Total difference with " + friendCheck.name + " is " + totalDifference);
            console.log(differenceArray);
        }

        var lowestNumber = Math.min(...differenceArray)
        console.log(lowestNumber);

        var yourMatchObj = {
            "name": "",
            "photo": ""
        }
 
        for (var k = 0; k < differenceArray.length; k++) {
            if (lowestNumber === differenceArray[k]) {
                yourMatchObj.name = friendsData[k].name;
                yourMatchObj.photo = friendsData[k].photo
            }
        }

        console.log(yourMatchObj);
        
        friendsData.push(newFriend)
        res.json(yourMatchObj)


    })
};

module.exports = {
    getAPI: getAPI,
    postAPI: postAPI
};
