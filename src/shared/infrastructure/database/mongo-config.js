const mongoose = require("mongoose");

const database = async (connection, host, port, user, password, db) => {
  try {
    const URI = `${connection}://${host}:${port}`;
    await mongoose.connect(URI, {
      user,
      pass: password,
      dbName: db,
    });
    console.log("Successful connection to Database");
  } catch (error) {
    console.log("Failed connection Database");
  }
};

module.exports = { database };
