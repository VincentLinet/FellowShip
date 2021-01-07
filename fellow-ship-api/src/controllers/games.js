const { createGameService, findGameService } = require("../services/gameService");

export const createGame = async (req, res, next) => {
  try {
    const createdGame = await createGameService(req.body);
    res.status(201).send({
      name: createdGame.name,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllGames = async (req, res, next) => {
  try {
    const foundGame = await findGameService(req.body);
    res.status(200).send({
      foundGame,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
