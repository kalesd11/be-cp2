const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://surajkales111:Suraj@011@cluster0.n0hdbxl.mongodb.net/subscribers";
const mongoServer = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database");
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (err) {
    console.log(err);
  }
};
mongoServer();
