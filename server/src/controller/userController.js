// controller/userController.js
import pool from "../configs/connectDB.js";
import jwt from "jsonwebtoken";

const handleSignup = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "Missing params",
        });
    }

    try {
        await pool.execute(
            "INSERT INTO users_login (fullname, email, password) VALUES (?,?,?)",
            [fullname, email, password]
        );

        res.json({
            errCode: 1,
            errMessage: "SignUp Successfully",
        });
    } catch (e) {
        if (e.code === "ER_DUP_ENTRY") {
            console.log("Email exists");
            res.json({
                errCode: 0,
                errMessage: "Email exists. Please use another email.",
            });
        } else {
            console.error(e);
            res.status(500).json({
                errCode: -1,
                errMessage: "Unknown error",
            });
        }
    }
};

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "Missing parameters",
        });
    }

    try {
        const [users] = await pool.execute(
            "SELECT * FROM users_login WHERE email = ?",
            [email]
        );

        if (users.length > 0) {
            if (users[0].password === password) {
                const email = users[0].email;
                const token = jwt.sign({ email }, "secret", {
                    expiresIn: "1h",
                });
                res.cookie("token", token, {
                    httpOnly: true,
                    domain: "http://localhost:8080/",
                });

                res.json({
                    errCode: 1,
                    errMessage: "Login Successfully",
                    data: {
                        email: email,
                        token: token,
                    },
                    withCredentials: true,
                });
            } else {
                res.json({
                    errCode: 0,
                    errMessage: "Wrong password",
                });
            }
        } else {
            res.json({
                errCode: 1,
                errMessage: "Email does not exist",
            });
            console.log("Email does not exist: ", email);
        }
    } catch (e) {
        res.status(500).json({
            errCode: 2,
            errMessage: e.message,
        });
    }
};

const handleLogout = (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({
        errCode: 1,
        message: "Logout successful",
        email: req.email,
    });
};

export default { handleSignup, handleLogin, handleLogout };
