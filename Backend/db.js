require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.DB_URL;

const connectToMongo = () => {
    mongoose
        .connect(mongoURI, () => {
            console.log("Connected to Mongo");
        })
        .catch((e) => console.log(e));
};

module.exports = connectToMongo;
