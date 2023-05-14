import pool from "../configs/connectDB.js";
import bcrypt from "bcrypt";
let handleSignup = async (req, res) => {
    let { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "missing params",
        });
    }
    try {
        // console.log("before pool.execute");
        let users = await pool.execute(
            "INSERT INTO users_login (fullname, email, password) VALUES (?,?,?)",
            [fullname, email, password]
        );
        // console.log("after pool.execute");
        res.json({
            errCode: 1,
            errMessage: "SignUp Successfully",
        });
    } catch (e) {
        if (e.code === "ER_DUP_ENTRY") {
            console.log("email exist");
            res.json({
                errCode: 0,
                errMessage: "Email exist. Pleaser use another email.",
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

let handleLogin = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "missing params",
        });
    } else {
        try {
            // Use Promise.all() to send multiple requests at once
            let users = await Promise.all([
                pool.execute(
                    "Select password from users_login where `email` = ?",
                    [email]
                ),
                pool.execute(
                    "Select password from users_login where `email` = ?",
                    [email + "1"]
                ),
                pool.execute(
                    "Select password from users_login where `email` = ?",
                    [email + "2"]
                ),
            ]);

            for (let user of users) {
                if (user) {
                    if (user[0] && user[0].length > 0) {
                        if (user[0][0]["password"] === password) {
                            res.json({
                                errCode: 1,
                                errMessage: "Login Successfully",
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
                            errMessage: "Mail does not exist",
                        });
                        console.log("mail not exist: ", email);
                    }
                }
            }
        } catch (e) {
            res.status(500).json({
                errCode: 2,
                errMessage: e.message,
            });
        }
    }
};

export default { handleSignup, handleLogin };
