const mongoose = require("mongoose");

 const gameSchema = new mongoose.Schema({
     title: String,
     releaseDate: String,
     rating: Number,
     description: String,
 });

 const gameModel = mongoose.model("games" , gameSchema);

 module.exports = gameModel;