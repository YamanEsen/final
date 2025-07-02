const mongoose = require("mongoose");

var MongoURL = "mongodb+srv://yamanesen1:yamanesen1@cluster0.kwtkl.mongodb.net/hotelsearch"

mongoose.connect(MongoURL);

var connection = mongoose.connection

connection.on('error', () =>{
   console.log("connection failed!")
})

connection.on('connected', () =>{
   console.log("connected succesfully!")
})

module.exports = mongoose;