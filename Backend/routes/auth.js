const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const fetchUser = require("../middleware/fetchUser");
const User = require("../models/User");
const JWT_SECRET = process.env.JWT_SECRET_MESSAGE;

// * Route 1: For Signning up a new user
// * Using: /api/auth/signup
router.post(
    "/signup",
    [
        body("name", "Invalid name").isLength({ min: 1 }),
        body("email", "Invalid email").isEmail(),
        body("password", "Length less than 8").isLength({ min: 8 }),
        body("role", "Invalid role").isIn(["admin", "employee"]),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        try {
            // * Check for whether user exists or not
            let user = await User.findOne({ email: req.body.email });
            if (user)
                return res.status(400).json({ error: "Email already taken" });

            // * If user does not exist. Create the user

            // * Securing the password
            const salt = await bcrypt.genSalt(10);
            securePassword = await bcrypt.hash(req.body.password, salt);

            // * Create the new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
                role: req.body.role,
            });

            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ role: req.body.role, authToken: authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever Error");
        }
    }
);

// * Route 2: For Signning in a user
// * Using: /api/auth/signin
router.post(
    "/signin",
    [
        body("email", "Invalid email").isEmail(),
        body("password", "Password cannot be blank").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        try {
            // * Check for whether user exists or not
            let user = await User.findOne({ email: req.body.email });
            if (!user)
                return res.status(400).json({ error: "Invalid Credentials" });

            const passwordCompare = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!passwordCompare)
                return res.status(400).json({ error: "Invalid Credentials" });

            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ role: user.role, authToken: authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever Error");
        }
    }
);

// * ROUTE 3: Get logged in User details
// * Using: /api/auth/getuser
router.post("/getuser", fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select([
            "-password",
            "-_id",
            "-role",
            "-__v",
        ]);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever Error");
    }
});

module.exports = router;
