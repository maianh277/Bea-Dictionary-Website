import jwt from "jsonwebtoken";

export default function (req, res, next) {
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.TOKEN, (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid");
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You're not authenticated");
    }
}
