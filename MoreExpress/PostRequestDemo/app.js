var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Lucas", "Moon", "Milo", "Molly"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.render("home");
});

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
});

app.post("/addfriend",function(req, res){
	var newfriend = req.body.newfriend;
	friends.push(newfriend);
	res.redirect("/friends");
});



//Tell Express to listen
app.listen(8080);
	console.log("server has started");

