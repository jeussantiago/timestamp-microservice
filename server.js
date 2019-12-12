// init project
//get converting time functions from other file
const timeStamp = require("./time-converter");
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

//handle for base case of no string
app.get("/api/timestamp", function(req, res) {
  var json_timestamp = timeStamp.time_converter("");
  //log json to page
  res.json(json_timestamp);
}); 


//api endpoint to convert inputed data
//input: data= unix time or calender time
//logs json conversion to screen
app.get("/api/timestamp/:data", function(req, res) {
  // console.log("data:", req.params.data/length)
  //check to see if parameters were entered
  if (req.params && Object.keys(req.params).length > 0) {
    //convert input data
    var json_timestamp = timeStamp.time_converter(req.params.data);
    //log json to page
    res.json(json_timestamp);
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
