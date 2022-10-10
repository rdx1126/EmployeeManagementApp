const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const fetchUser = require("../middleware/fetchUser");
const Task = require("../models/Task");

// * ROUTE 1: Add task
// * Using: /api/task/addtask
router.post(
    "/addtask",
    fetchUser,
    [
        body("taskType", "taskType field empty").exists(),
        body("startTime", "startTime field empty").exists(),
        body("timeTaken", "timeTaken field empty").exists(),
        body("description", "description field empty").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, error: errors.array() });
        }

        try {
            const { role } = req.user;
            if (role !== "employee")
                return res.status(400).json({
                    success: false,
                    error: "Action cannot be performed",
                });

            const { taskType, startTime, timeTaken, description } = req.body;

            const task = new Task({
                taskType,
                startTime,
                timeTaken,
                description,
                user: req.user.id,
            });

            await task.save();
            return res.json({
                success: true,
                message: "Task Added Successfully",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever Error");
        }
    }
);

// * ROUTE 2: Fetch all task respective to employee
// * Using: /api/task/fetchtask
router.get("/fetchtask", fetchUser, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).select("-user");
        return res.json({ success: true, data: tasks });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever Error");
    }
});

// * ROUTE 3: Update a task

// * Using: /api/task/updatetask
// router.put("/updatetask", fetchUser, async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ success: false, error: errors.array() });
//     }

//     try {
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Sever Error");
//     }
// });
module.exports = router;
