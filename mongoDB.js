const Express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserModel = require("./user.schema");
const uri = "mongodb+srv://DB:123DB123@db.wrrrnge.mongodb.net/mag";

const app = Express();
app.use(bodyParser.json());

// ---------------------------------------------------------------------------------------------------------------------
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(uri);
  } catch (err) {
    process.exit();
  }
};
connect();
// ---------------------------------------------------------------------------------------------------------------------

// =====================================================================================================================

// GET METHOD
app.get("/serrver", async function (req, res) {
  let allUser = await UserModel.find();
  res.json({ User: allUser, Status: 200 }); // GET Methods
});

// POST METHOD
app.post("/serrver", async function (req, res) {
  let { name, age, country, Phone } = req.body;
  const user = {
    name: name,
    age: age,
    country: country,
    Phone: Phone,
  };

  let createUser = await UserModel.create(user); // req.body is return data in frontend body
  res.json({ Message: "Data Add Succefully ", User: createUser, Status: 200 }); // Message after data add
});

// PUT METHOD
app.put("/serrver/:id", async function (req, res) {
  let payload = req.body;
  await UserModel.findByIdAndUpdate(req.params.id, payload);
  res.json({ Message: "Data Update Succefully ", Status: 200 });
});

// Delete METHOD
app.delete("/serrver/:id", async function (req, res) {
  let payload = req.body;
  await UserModel.findByIdAndDelete(req.params.id, payload);
  res.json({ Message: "Data Delete Succefully ", Status: 200 });
});

// =====================================================================================================================

app.listen(5050);
