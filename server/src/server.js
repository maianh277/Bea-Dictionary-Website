import express from "express";
import initWebRoute from "./route/web.js";
import cors from "cors";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 8080;

app.use(cors());
initWebRoute(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
