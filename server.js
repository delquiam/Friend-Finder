//=========================================================================
//DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
//=========================================================================

var express = require("express");
var path = require("path");

//=========================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for an express server
//=========================================================================

//Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data paarsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//===========================================================================
// DATA
// This points our server to our initial data.
//===========================================================================
var friends = require("./data/friends");
console.log(friends);

//===========================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
//===========================================================================

require("./routes/apiRoutes")(app, tables, waitingList);
require("./routes/htmlRoutes")(app);

//===========================================================================
//The below code effectively "starts" our server
//===========================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: "+ PORT);
});
