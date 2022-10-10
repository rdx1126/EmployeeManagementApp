const express = require("express");
const router = express.Router();

const fetchUser = require("../middleware/fetchUser");
const User = require("../models/User");

// * ROUTE 1: Fetch all employees
// * Using: /api/employee/fetchall
router.get("/fetchall", fetchUser, async (req, res) => {
    try {
        const { role } = req.user;
        if (role !== "admin")
            return res
                .status(403)
                .json({ success: false, error: "Forbidden action" });

        const employees = await User.find({ role: "employee" }).select(
            "-password"
        );
        return res.json({ success: true, data: employees });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever Error");
    }
});

// * ROUTE 2: Deactivate an employee's account
// * Using: /api/employee/deactivate
router.put("/deactivate", fetchUser, async (req, res) => {
    try {
        const { role } = req.user;
        if (role !== "admin")
            return res
                .status(403)
                .json({ success: false, error: "Forbidden action" });

        const { _id, deactivated } = await User.findOne({
            email: req.body.email,
        });

        await User.findByIdAndUpdate(_id, { deactivated: !deactivated });
        return res.json({
            success: true,
            message: !deactivated ? "Account deactivated" : "Account activated",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Sever Error");
    }
});

module.exports = router;
