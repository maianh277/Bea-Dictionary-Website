import userController from "../controller/userController.js";
import express from "express";
let router = express.Router();

const initWebRoute = (app) => {
    router.post("/signup", userController.handleSignup);
    router.get("/login", userController.handleLogin);
    return app.use("/api", router);
};
export default initWebRoute;
