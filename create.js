const fs = require("fs");
// create file
// appendFile is working on if not found the file its well create file and if found the file is will repet the contant data in the file
// if it doesn't exist, read and write to the file. If it does exist, append data to the end of the file.
// if you need updata what proccess is done is will take the new data and add this on old data
// ======================================================================================================================
fs.appendFile("NodeCreate1.txt", "Hello12", function (err, data) {
  err ? console.log(err) : console.log("Success!");
});

// if it doesn't exist, read and write to the file. If it does exist, not append data to the end of the file.
// if you need updata what proccess is done is will Replace the old data with the new data
// ======================================================================================================================
fs.writeFile("NodeCreate2.txt", "Hello21", function (err, data) {
  err ? console.log(err) : console.log("Success!");
});

fs.unlink("NodeCreate1.txt", function (err) {
  err ? console.log(err) : console.log("Success!");
});
 