var express = require("express");
var app = express();

// "/" > "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!");
});
// "/bye" > "Goodbye"
app.get("/bye", function(req, res){
	console.log("someone requested /bye")
	res.send("Goodbye!!");
});
// "/dog" > "Meow"
app.get("/dog", function(req, res){
	res.send("Meow!!");
});
app.get("/r/:subredditname", function (req, res){
	var subredditname = req.params.subredditname;
	res.send("welcome to reddit " + subredditname + " Subreddit!");
});

app.get("*", function(req, res){
	res.send("You are a star");
});



//Tell Express to listen
app.listen(8080);
	console.log("server has started");