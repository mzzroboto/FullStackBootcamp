var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
	res.send("Welcome to homepage");
});

app.get("/posts", function(req, res){
	var posts = [
		{title:"Post 1", author: "Rachel"},
		{title:"Title 2", author: "Lucas"},
		{title:"Can you believe this", author: "Rachel"}
		]
	res.render("posts", {posts:posts});
	
});
app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
	
});

//Tell Express to listen
app.listen(8080);
	console.log("server has started");

