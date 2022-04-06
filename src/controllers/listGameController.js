const gameModel = require("../models/gameModels");

const listGamesController = async (request, response) => {
  const id = request.params.id;

  if (id) {
    const games = await gameModel.findById({ _id: id });
    response.send(games);
  } else {
    const games = await gameModel.find();
    response.send(games);
  }
};

module.exports = listGamesController;