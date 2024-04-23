// const data = 30;
// data >= 40 ? console.log(true) : console.log(false);
// console.log(__dirname);

// hrrp server
const http = require("http");
// rede file
const fs = require("fs");
// in the line i creating server and inside the server create readefile becuse red file in the res.end("fileName")
// ======================================================================================================================
http
  .createServer(function (req, res) {
    // fs.redeFile is need from me 2   parameters: the path of the file and a callback
    fs.readFile("index.html", function (err, data) {
      // the res get from server
      // WritHead it is get from me 2 paramiters
      // first one is state numner and second one is info about this state and type file
      res.writeHead(200, { "Content-Type": "text/html" });
      //  res.end is working  when we finish to send information to client
      res.end(data);
    });
  })
  .listen(3000);
