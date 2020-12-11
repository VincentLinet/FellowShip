const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// FYI : this is a simplified schema to launch the dev of basic user management routes
// TODO : add the omitted data
const gameSchema = new Schema(
    {
        name: { type: String, required: true},
    }, { versionKey: false })

const Game = mongoose.model('game', gameSchema, 'Games');

module.exports = Game;
