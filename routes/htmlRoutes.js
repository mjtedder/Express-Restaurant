// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
let path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/reserve", (req, res) => {
        return (res.sendFile(path.join(__dirname, "../public/reserve.html")))
    })

    app.get("/tables", (req, res) => {
        return (res.sendFile(path.join(__dirname, "../public/tables.html")))
    })

    // If no matching route is found default to home
    app.get("/", (req, res) => {
        return (res.sendFile(path.join(__dirname, "../public/home.html")))
    })

}