let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});