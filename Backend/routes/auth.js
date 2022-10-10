const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const fetchUser = require("../middleware/fetchUser");
const User = require("../models/User");
const JWT_SECRET = process.env.JWT_SECRET_MESSAGE;

// * ROUTE 1: For Signning up a new user
// * Using: /api/auth/signup
router.post(
    "/signup",
    [
        body("name", "Invalid name").isLength({ min: 1 }),
        body("email", "Invalid email").isEmail(),
        body("password", "Length less than 8").isLength({ min: 8 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, error: errors.array() });
        }

        try {
            // * Check for whether user exists or not
            let user = await User.findOne({ email: req.body.email });
            if (user)
                return res
                    .status(400)
                    .json({ success: false, error: "Email already taken" });

            // * If user does not exist. Create the user

            // * Securing the password
            const salt = await bcrypt.genSalt(10);
            securePassword = await bcrypt.hash(req.body.password, salt);

            // * Create the new admin
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
            });

            const data = {
                user: {
                    id: user.id,
                    role: user.role,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({
                success: true,
                role: user.role,
                authToken: authToken,
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever Error");
        }
    }
);

// * ROUTE 2: For Signning in a user
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
            return res
                .status(400)
                .json({ success: false, error: errors.array() });
        }

        try {
            // * Check for whether user exists or not
            let user = await User.findOne({ email: req.body.email });
            if (!user)
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid Credentials" });

            // * Check for password
            const passwordCompare = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!passwordCompare)
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid Credentials" });

            // * If user role is employee then check if their account is deactivated or not
            if (user.role === "employee" && user.deactivated)
                return res.status(403).json({
                    success: false,
                    error: "Account deactivated. Please Contact your Admin",
                });

            const data = {
                user: {
                    id: user.id,
                    role: user.role,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ success: true, role: user.role, authToken: authToken });
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
            "-deactivated",
            "-__v",
        ]);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever Error");
    }
});

// * ROUTE 4: SignUp a employee by admin
// * Using: /api/auth/signupemp
router.post(
    "/signupemp",
    fetchUser,
    [
        body("name", "Invalid name").isLength({ min: 1 }),
        body("email", "Invalid email").isEmail(),
        body("password", "Length less than 8").isLength({ min: 8 }),
        body("contactNumber", "Invalid contact number").isLength({
            min: 10,
            max: 10,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, error: errors.array() });
        }

        try {
            // * Check whether the user adding the employee is admin or not
            const { role } = req.user;
            if (role !== "admin")
                return res
                    .status(403)
                    .json({ success: false, error: "Forbidden action" });

            // * Check for whether email already exists or not
            let user = await User.findOne({ email: req.body.email });
            if (user)
                return res
                    .status(400)
                    .json({ success: false, error: "Email already taken" });

            // * Securing the password
            const salt = await bcrypt.genSalt(10);
            securePassword = await bcrypt.hash(req.body.password, salt);

            // * Create the new employee
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
                role: "employee",
                contactNumber: req.body.contactNumber,
                joiningDate: req.body.joiningDate,
                department: req.body.department,
            });

            if (!user)
                return res.status(500).json({
                    success: false,
                    error: "Internal Sever Error - Cannot add employee",
                });

            return res.json({
                success: true,
                message: "Employee added",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever Error");
        }

        return res.json({ success: true, data: role });
    }
);

module.exports = router;
