const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const addGameController = require('./controllers/addGameController');
const listGamesController = require('./controllers/listGameController');
const updateGameController = require('./controllers/updateGameController')
const deleteGameController = require('./controllers/deleteGameController')

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/games/:id?", listGamesController);
server.delete("/games/:id", deleteGameController)
server.post("/games/:id", updateGameController)
server.post("/games", addGameController);

mongoose
.connect(
    'mongodb+srv://Raymond:owez7Wl88DUaiIaU@gameserver.7edn8.mongodb.net/Games?retryWrites=true&w=majority'
).then(() => {
    console.log("Data base connected");

    server.listen(4000, () => {
        console.log("Sever running on port 4000");
    });
}).catch((error) => {
    console.log(error);
  });