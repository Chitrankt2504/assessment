const express = require("express");
const ConnectMongo = require("./DB");
const Users = require('./model');

require(`dotenv`).config();

const app = express();

//for read the request body
app.use(express.json());

ConnectMongo();

//For getting the data of the users
app.get("/", async (req, res) => {
  try {
    const data = await Users.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

//For Posting the data of the Users
app.post("/", async (req, res) => {
  try {
    const payload = req.body;

    const User = new Users(payload);
    await User.save();

    res.status(200).json({ staus: "success" });
  } catch (error) {
    res.send(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is on and running on port ${process.env.PORT}`);
});
