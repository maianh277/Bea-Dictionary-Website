// controller/userController.js
import pool from "../configs/connectDB.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const handleSignup = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing params",
    });
  }

  try {
    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    //SQL adding user into database
    const [result] = await pool.execute(
      "INSERT INTO users_login (fullname, email, password) VALUES (?,?,?)",
      [fullname, email, hashed]
    );
    // console.log(result);
    const insertId = result.insertId;
    const saveWords = {};
    const saveTranslation = {};
    await pool.execute(
      "INSERT INTO users_info (id, phone, bio, save_words, save_translation) VALUES (?,?,?,?,?)",
      [
        insertId,
        0,
        "",
        JSON.stringify(saveWords),
        JSON.stringify(saveTranslation),
      ]
    );
    await pool.execute(
      "INSERT INTO community_post (id, image, content, hashtag) VALUES (?,?,?,?)",
      [insertId, "", "", ""]
    );

    res.status(200).json({
      message: "SignUp Successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error occurred during signup",
    });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({
      message: "Missing parameters",
    });
  }

  try {
    const [users] = await pool.execute(
      "SELECT * FROM users_login WHERE email = ?",
      [email]
    );

    if (users.length > 0) {
      const validPassword = await bcrypt.compare(password, users[0].password);

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
          message: "Wrong password",
        });
      }
    } else {
      res.status(404).json({
        message: "Email does not exist",
      });
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
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
    const [users_detail] = await pool.execute(
      "SELECT * FROM users_info WHERE id = ?",
      [id]
    );

    if (users.length > 0) {
      const result = {
        fullname: users[0].fullname,
        email: users[0].email,
        phone: users_detail[0].phone,
        bio: users_detail[0].bio,
        avatar: users_detail[0].avatar,
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

const handleEditUser = async (req, res) => {
  const { fullname, email, phone, bio, id } = req.body;

  try {
    await pool.execute(
      "UPDATE users_login SET `fullname` = ?, `email`= ? WHERE `id` = ?",
      [fullname, email, id]
    );

    await pool.execute(
      "UPDATE users_info SET `phone` = ?, `bio`= ? WHERE `id` = ?",
      [phone, bio, id]
    );
    res.status(200).json({ message: "User updated successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the user" });
  }
};

import mime from "mime";

const handleAvatar = async (req, res) => {
  const { id } = req.body;
  const imagePath = req.file.path;
  try {
    if (id !== undefined) {
      const [result] = await pool.execute(
        "UPDATE users_info SET avatar = ? WHERE id = ?",
        [imagePath, id]
      );

      // Get the mime type of the image file
      const mimeType = mime.getType(imagePath);

      // Set the Content-Type header to indicate the correct mime type
      res.set("Content-Type", mimeType);

      // Send the image file as the response
      res.sendFile(imagePath);
    } else {
      res.status(400).json({ error: "Missing required parameter: id" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload avatar image" });
  }
};

export default {
  handleSignup,
  handleLogin,
  handleLogout,
  getDetailUser,
  handleEditUser,
  handleAvatar,
};
