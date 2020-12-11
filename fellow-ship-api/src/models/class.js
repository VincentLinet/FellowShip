const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// FYI : this is a simplified schema to launch the dev of basic user management routes
// TODO : add the omitted data
const classSchema = new Schema(
    {
        name: { type: String, required: true},

    }, { versionKey: false })

const Class = mongoose.model('class', classSchema, 'Class');

module.exports = Class;
