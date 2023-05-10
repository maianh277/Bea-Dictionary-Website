import pool from "../configs/connectDB.js";

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

export default { handleSignup };
