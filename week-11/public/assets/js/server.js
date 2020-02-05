var express = require("express");
var path = require("path");

var app = express();
var port = 3000;

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "..", "../notes.html"));
    console.log("notes available");
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "..", "../index.html"));
    console.log("index available");
})    
app.listen(port, function(){
    console.log("App listening on PORT " + port);
})