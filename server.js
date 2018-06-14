//Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

//Sets up basic properties for our express server
let app = express();

//Sets initial port
let PORT = process.env.PORT || 8080;

//Testing communication between front/back end.
//app.get('/', function (req, res) {
    //res.send('Hello World')
  //})

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("/routes/apiroutes")(app);
require("/routes/htmlroutes")(app);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});