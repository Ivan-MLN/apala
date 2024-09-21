const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://abilek:abilek@cluster0.8o5aa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = () => {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Database connected.");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    MONGO_URI,
    connect
}