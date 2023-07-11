require("dotenv").config();
const mongoDbUrl = process.env.DATABASE_URL;
const { MongoClient } = require("mongodb");
let mongodb;

function connect(callback) {
  MongoClient.connect(
    mongoDbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
      console.log(err);
      mongodb = db;
      callback();
    }
  );
}

function get(collectionName) {
  return mongodb.db("restaurant_app").collection(collectionName);
}
module.exports = { get, connect };
