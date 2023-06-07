import express from "express";
import initWebRoute from "./route/web.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import translate from "translate-google";

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const port = process.env.PORT || 8080;

// fix : optimize
app.post("/translate", async (req, res) => {
  const { para } = req.body;
  try {
    const translation = await translate(para, { from: "en", to: "vi" });
    res.json({ translation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Translation failed" });
  }
});

initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
