// controller/userController.js
import pool from "../configs/connectDB.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const handleSignup = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "Missing params",
        });
    }

    try {
        //hashed password
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        //SQL adding user into database
        await pool.execute(
            "INSERT INTO users_login (fullname, email, password) VALUES (?,?,?)",
            [fullname, email, hashed]
        );
        res.status(200).json({
            message: "SignUp Successfully",
        });
    } catch (e) {
        if (e.code === "ER_DUP_ENTRY") {
            // console.log(e);
            res.status(500).json({
                message: "Email exists. Please use another email.",
            });
        } else {
            console.error(e);
            res.status(500).json({
                message: "Unknown error",
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
            const validPassword = await bcrypt.compare(
                password,
                users[0].password
            );

            if (validPassword) {
                const email = users[0].email;
                const token = jwt.sign(
                    {
                        id: users[0].id,
                        email,
                    },
                    process.env.TOKEN,
                    {
                        expiresIn: "1h",
                    }
                );

                res.status(200).json({
                    message: "Login Successfully",
                    data: {
                        id: users[0].id,
                        token: token,
                    },
                    withCredentials: true,
                });
            } else {
                res.status(403).json({
                    errMessage: "Wrong password",
                });
            }
        } else {
            res.status(404).json({
                errMessage: "Email does not exist",
            });
        }
    } catch (e) {
        res.status(500).json({
            errMessage: e.message,
        });
    }
};

const handleLogout = (req, res) => {
    return res.status(200).json({
        message: "Logout successful",
        email: req.email,
    });
};

const getDetailUser = async (req, res) => {
    const { id } = req.body;

    try {
        const [users] = await pool.execute(
            "SELECT * FROM users_login WHERE id = ?",
            [id]
        );

        if (users.length > 0) {
            const result = {
                fullname: users[0].fullname,
            };
            res.status(200).json({
                message: "Get detail Successfully",
                data: result,
                withCredentials: true,
            });
        } else {
            res.status(404).json({
                message: "Get detail failed",
            });
        }
    } catch (e) {
        res.json({
            message: e.message,
        });
    }
};
export default { handleSignup, handleLogin, handleLogout, getDetailUser };
