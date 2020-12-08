const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// FYI : this is a simplified schema to launch the dev of basic user management routes
// TODO : add the omitted data
const userSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        username: { type: String, required: true },
        lastname: { type: String, required: true },
        firstname: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        gender: { type: Number, required: false },
        picture: { type: String, required: false },
        description: { type: String, required: false }
    }, { versionKey: false });

const User = mongoose.model('user', userSchema, 'Users');

module.exports = User;
