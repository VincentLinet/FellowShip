const Game = require("../models/games");

export const createGameService = async (params) => {
  return new Promise(async (resolve, reject) => {
    console.log("[SERVICE] - Creating a new game.")
    const existingGame = await Game.findOne({ name: params.name });
    if (existingGame) {
      reject('Game already exists in database.');
    } else {
      let game = new Game({
        name: params.name
      });
      game.save().then(createdGame => {
        resolve(createdGame);
      }).catch(error => {
        reject(error);
      });
    }
  });
};

export const findGameService = async () => {
  return new Promise(async (resolve, reject) => {
    const foundGame = await Game.find();
    try {
      resolve(foundGame);
    } catch (error) {
      reject(error);
    }
  });
};
