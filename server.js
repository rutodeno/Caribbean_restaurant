var express = require ("express");
var bodyParser = require ("body-parser");
var path = require("path");
var seatingArray = require ("./seatingArray.js");

var app = express();
var PORT = process.env.PORT || 8011;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json()); 


// routes

app.get("/", function(res,res){

    res.sendFiles(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/seating", function(req, res){
    res.sendFile(path.join(__dirname, "seating.html"));
});

app.get("/api/tables", function(req, res){
    return res.json(seatingArray);
});

app.post("/api/tables", function(req, res){
    var newSeating = req.body;
    seatingArray.push(newSeating);
    res.json(newSeating);
});


app.listen(PORT, function(){

    console.log("App listening on PORT "+ PORT);
})
