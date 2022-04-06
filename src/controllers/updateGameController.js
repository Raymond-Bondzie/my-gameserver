const gameModel = require("../models/gameModels");

const updateGameController = async (request, response) => {
  const id = request.params.id;

  const updatedDetails = request.body;

  const game = await gameModel.findByIdAndUpdate({ _id: id }, updatedDetails);

  response.send({
    message: "game updated",
    data: game,
  });
};

module.exports = updateGameController;