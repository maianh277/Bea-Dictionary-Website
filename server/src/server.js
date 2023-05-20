import express from "express";
import initWebRoute from "./route/web.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const port = process.env.PORT || 8080;

initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
