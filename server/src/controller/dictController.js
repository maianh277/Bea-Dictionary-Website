import pool from "../configs/connectDB.js";

const handleSaveWords = async (req, res) => {
  const { id, save_words } = req.body;
  try {
    await pool.execute(
      "UPDATE users_info SET `save_words` = ? WHERE `id` = ?",
      [save_words, id]
    );
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const handleGetWords = async (req, res) => {
  const { id } = req.body;
  try {
    const [rows] = await pool.execute(
      "SELECT save_words FROM users_info WHERE id = ?",
      [id]
    );
    const saveWordsArray = JSON.parse(rows[0].save_words);
    res.status(200).json({ saved_words: saveWordsArray });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default { handleSaveWords, handleGetWords };
