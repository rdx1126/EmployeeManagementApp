const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "admin",
        enum: ["admin", "employee"],
    },
    deactivated: {
        type: Boolean,
        default: false,
    },
    contactNumber: {
        type: Number,
        default: 0,
    },
    joiningDate: {
        type: Date,
        default: Date.now,
    },
    department: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("users", UserSchema);
