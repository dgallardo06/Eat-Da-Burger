//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//Express
var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

//Set Handlebars
app.use(methodOverride("_method"));
app.engine("handlebars",exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Import routes and give server access to routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(port);