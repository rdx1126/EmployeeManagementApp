require("dotenv").config();
const mongoose = require("mongoose");
const password = process.env.DB_PASSWORD;
const mongoURI = `mongodb+srv://le3g4ion5Admin:${password}@cluster0.yxwxk27.mongodb.net/employeeManagementApp?retryWrites=true&w=majority`;

const connectToMongo = () => {
    mongoose
        .connect(mongoURI, () => {
            console.log("Connected to Mongo");
        })
        .catch((e) => console.log(e));
};

module.exports = connectToMongo;
