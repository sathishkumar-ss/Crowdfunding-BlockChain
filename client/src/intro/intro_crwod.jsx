const express = require("express");
const path = require("path");
const ejsLint = require("ejs");
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// Define a route
app.get("/", function(req, res) {
    res.render("index");
});

// Start the server
app.listen(app.get("port"), function() {
    console.log("Server listening on port", app.get("port"));
});
