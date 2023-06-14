import pool from "../configs/connectDB.js";

const handleUploadPost = async (req, res) => {
  const { content, hashtag, id } = req.body;
  try {
    await pool.execute(
      "INSERT INTO community_post (`content`, `hashtag`, `id`) VALUES (?, ?, ?)",
      [content, hashtag, id]
    );
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
const handleGetPost = async (req, res) => {
  const { id } = req.body;
  // fix: fix fullname
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM community_post JOIN users_login ON community_post.id = users_login.id ",
      [id]
    );

    const results = rows.map((row) => ({
      content: row.content,
      hashtag: row.hashtag,
      fullname: row.fullname,
    }));

    res.send(results);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error occurred");
  }
};

export default { handleUploadPost, handleGetPost };
