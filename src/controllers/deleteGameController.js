const gameModel = require("../models/gameModels");

const deleteGameController = async (request, response) => {
  const id = request.params.id;

  const game = await gameModel.findByIdAndDelete({ _id: id });
  response.send({
    message: "game deleted",
    data: game,
  });
};

module.exports = deleteGameController;