const gameModel = require("../models/gameModels");

const addGameController = async (request, response) => {
  const game = request.body;
  const model = new gameModel(game);

  await model.save();

  response.send({
    message: "added successfully",
    data: game,
  });
};

module.exports = addGameController;