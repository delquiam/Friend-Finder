// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../model/friends.js");
var fs = require('fs');
var path = require("path");
// console.log(friends);
// var friendsCtrl = require("../controllers/friends.ctrl")
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("../model/friends", function(req, res){
        res.json(friends);
    })

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array

    app.post("/api/friends",  (req, res) => {
        // console.log(req.body);
        // steps needed to achieve finding a friend
        // compare users answers with friends array
        // find the most compatible friend
        // res.json compatible friend
        // var newShopper = req.body;
        // var newFriend = {};
        var newFriend = req.body;
        var newScores= newFriend.scores;
        var similarity = 50;
        var total = 0;
        var index = -1;

        for (var i = 0; i < friends.length; i++) {
            // var totalDifference = 0;
            total = 0;

            // for (var j = 0; j < newShopper.scores.length; j++) {
                // console.log(totalDifference);
                // totalDifference = parseInt(totalDifference) + Math.abs[parseInt(newShopper.scores[j]) - parseInt(friends[i].scores[j])];

                for (var j = 0; j < newScores.length; j++) {
                    var diff = Math.abs(newScores[j] - friends[i].scores[j]);
                    total += diff;
            }
            // console.log(totalDifference);

            // if (totalDifference < similarity) {
            //     console.log("Friend found");
            //     similarity = totalDifference;
            //     newFriend = friends[i];
            if (total < similarity) {
                // console.log("Friend found");
                similarity = total;
                index = i;
            }
        }
        // adds shopper to friends list
        friends.push(newFriend);

        // updates friends file
        // fs.writeFileSync(path.join(__dirname, "../model/friends.js"), 'module.exports = ' +
        // JSON.stringify(friends, null, 4));
        // console.log(newFriend);
        res.json(friends[index]);
        
    });
}