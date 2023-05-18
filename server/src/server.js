import express from "express";
import initWebRoute from "./route/web.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
initWebRoute(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
