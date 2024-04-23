const Express = require("express");
const bodyParser = require("body-parser");

// ((((        HTTP Methods        ))))
// ...
// ...
// create server with express
const app = Express();
app.use(bodyParser.json()); // any data  return from  body make it
let User = [
  {
    name: "Mohamed",
    age: "21",
    phone: "01152237712",
  },
];

// []; // Database

// =================================================================
// GET METHOD
app.get("/user", function (req, res) {
  res.json({ User: User, Message: "Done" }); // GET Methods
});
// POST METHOD
app.post("/user", function (req, res) {
  //post is add data
  User.push(req.body); // req.body is return data in frontend body
  res.json({ Message: "Data Add Succefully " }); // Message after data add
});

// PUT METHOD
app.put("/user", async function (req, res) {
  let { name, age } = req.body;
  await User.find((use, ix) => {
    if (use.name === name) {
      User[ix] = { name: use.name, age: age };
      return true;
    }
    console.log(use.name);
  });
  res.json({ Message: "Data Update Succefully " });
});

// =================================================================

// app.get("/user/:id", function (req, res, next) {
//   res.json({ name: "My Data is succed", id: req.params.id }); // Params // Data api
//   next();
// });
// app.get("/home", function (req, res) {
//   res.send("My Data is succed" + req.query.name); // Query // Data html
// });
// // HTTP METHOD GET , POST , PUT , DELETE

// app.use("/user/:id", function (req, res, next) {
//   console.log("tha server is req " + new Date().toISOString());
//   next();
//   4;
// });

app.listen(3030);
