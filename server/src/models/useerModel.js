const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: String,
    phone: String
});

const UserModel = model("Users", UserSchema);

module.exports = UserModel;