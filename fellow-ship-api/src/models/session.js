const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// FYI : this is a simplified schema to launch the dev of basic user management routes
// TODO : add the omitted data
const sessionSchema = new Schema(
    {
        number_of_players: { type: Number, required: true},
        title: { type: String, required: true},
        description: { type: String, required: true},
        location: { type: String, required: true},
        recurrence: { type: Number, required: true},

    }, { versionKey: false })

const Session = mongoose.model('session', sessionSchema, 'Sessions');

module.exports = Session;
