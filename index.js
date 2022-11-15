const express = require("express");
const app = express();
const port = 3000
const mongoose = require("mongoose")
// const auth = require("./userRoute/auth")
require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


mongoose
  .connect(process.env.url_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("connect to database");
  })
  .catch((err) => console.log(err));



app.get("/", async (req, res) => {
    res.send("cek output mongoose")
});

app.use("/auth", require("./userRoute/auth"))
app.use("/todo", require("./userRoute/todo"))

app.listen(port, () => {
    console.log(`running into http://localhost:${port}`);
});