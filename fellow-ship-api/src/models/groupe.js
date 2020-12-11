const mongoose = require("mongoose");
const Class = require("./class");
const Game = require("./games");
const Session = require("./session");

const Schema = mongoose.Schema;

// FYI : this is a simplified schema to launch the dev of basic user management routes
// TODO : add the omitted data
const groupSchema = new Schema(
    {
        name: { type: String, required: true },
        game: { type: Game, required: true },
        past_sessions: { type: Number, required: true },
        session: { type: Seance, required: true },
        classes:  { type: Map, of: Class, required: true },
        users: { type: Array, required: false }
    }, { versionKey: false });

const Group = mongoose.model('group', groupSchema, 'Groups');

module.exports = Group;
