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
// const handleSaveTranslation = async (req, res) => {
//   const { id, para } = req.body;

//   try {
//     await pool.execute(
//       "UPDATE users_info SET `save_translation` = ? WHERE `id` = ?",
//       [para, id]
//     );

//     res.sendStatus(200);
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// };

// const handleGetTranslation = async (req, res) => {
//   const { id } = req.body;
//   try {
//     const [rows] = await pool.execute(
//       "SELECT save_translation FROM users_info WHERE id = ?",
//       [id]
//     );
//     const saveTranslationArray = JSON.parse(rows[0].save_translation);
//     res.status(200).json({ save_translation: saveTranslationArray });
//   } catch (e) {
//     console.log(e);
//     res.status(500);
//   }
// };
const handleSaveTranslation = async (req, res) => {
  try {
    const { id, para_before, para_after, time } = req.body;

    await pool.execute(
      "INSERT INTO translation_history (`id`, `para_before`, `para_after`, `time`) VALUES (?, ?, ?, ?)",
      [id, para_before, para_after, time]
    );

    res.status(200).json({
      message: "OK",
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const handleGetTranslation = async (req, res) => {
  const { id } = req.body;
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM translation_history WHERE `id`= ?",
      [id]
    );

    const results = rows.map((row) => ({
      para_after: row.para_after,
      para_before: row.para_before,
      time: row.time,
    }));

    res.send(results);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error occurred");
  }
};
export default {
  handleSaveWords,
  handleGetWords,
  handleSaveTranslation,
  handleGetTranslation,
};
