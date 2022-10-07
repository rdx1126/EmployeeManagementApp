const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET_MESSAGE;

const fetchuser = (req, res, next) => {
    // * Get the user from the jwt token and ID to request object
    const token = req.header("auth-token");
    if (!token)
        return res
            .status(401)
            .json({ error: "Authenticate using a valid token" });

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ error: "Authenticate using a valid token" });
    }
};

module.exports = fetchuser;
