const express = require("express");

const { createGame, getAllGames } = require("../controllers/games");
const router = express.Router();

router.get("/all", getAllGames);
router.post("/new", createGame);

module.exports = router;
