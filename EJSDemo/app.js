var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.ejs");
	res.send("Welcome to homepage");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar: thing});
	
});


//Tell Express to listen
app.listen(8080);
	console.log("server has started");

