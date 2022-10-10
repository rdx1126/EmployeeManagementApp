const mongoose = require("mongoose");
const { Schema } = mongoose;

const Task = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    taskType: {
        type: String,
        required: true,
        enum: ["Break", "Meeting", "Work"],
    },
    startDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    timeTaken: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("task", Task);
