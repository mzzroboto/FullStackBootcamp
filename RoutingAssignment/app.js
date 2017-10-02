express = require("express");
app = express();

//Visit "/"
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});
// //Visit "/speak/pig"
// app.get("/speak/pig", function(req, res){
// 	res.send("\"The pig says'Oink!'\"");
// });
// //Visit "/speak/cow"
// app.get("/speak/cow", function(req, res){
// 	res.send("\"The cow says'Moo!'\"");
// });
// //Visit "/speak/dog"
// app.get("/speak/dog", function(req, res){
// 	res.send("\"The dog says'Woof Woof!'\"");
// });
app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof",
		cat: "Meow"
	}

	res.send("The " + animal + " says '" + sounds[animal] + "'");
});

//Visit "/repeat/hello/3" repeat word that many times
app.get("/repeat/:word/:num", function(req, res){
	var word = req.params.word;
	var num = req.params.num;
	var words = "";
	for(var i=0; i < num; i++){
		words += word + " ";
	}
	res.send(words);
});
//All others go to 404
app.get("*", function(req, res){
	res.send("Sorry, page not found...404");
});

//Listen
app.listen(8090);
	console.log("server has started");
