import pool from "../configs/connectDB.js";
import userService from "../services/userService.js";

let handleSignup = (req, res) => {
    let { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "missing params",
        });
    }
    return new Promise((resolve, reject) => {
        try {
            pool.execute(
                "INSERT INTO users_login (fullname, email, password) VALUES (?,?,?)",
                [fullname, email, password]
            );
            console.log("Input successfull");
        } catch (e) {
            reject(e);
        }
    });
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

            // let dbPassword = user[0][0].password;
            for (let user of users) {
                if (user) {
                    if (user[0] && user[0].length > 0) {
                        console.log(user[0][0]["password"]);
                        console.log(password);
                        if (user[0][0]["password"] === password) {
                            res.json({
                                errCode: 0,
                                errMessage: "email exist & correct password",
                            });
                        } else {
                            res.json({
                                errCode: 1,
                                errMessage: "wrong password",
                            });
                        }
                    } else {
                        res.json({
                            errCode: 1,
                            errMessage: "mail not exist",
                        });
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
