// middleware/authenticateToken.js
import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(403).json({
            errCode: 0,
            errMessage: "Unauthorized",
        });
    }

    jwt.verify(token, process.env.TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                errCode: 0,
                errMessage: "Invalid token",
            });
        }
        req.email = decoded.email;
        next();
    });
}

export default authenticateToken;
