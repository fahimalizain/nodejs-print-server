import express = require("express");
import path = require("path");
import exphbs = require("express-handlebars");

const app: express.Application = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("home");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
