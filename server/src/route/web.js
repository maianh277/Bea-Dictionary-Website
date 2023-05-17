// route/web.js
import express from "express";
import userController from "../controller/userController.js";
import authenticateToken from "../middleware/authenticateToken.js";

const initWebRoute = (app) => {
    const router = express.Router();

    router.post("/signup", userController.handleSignup);
    router.post("/login", userController.handleLogin);
    router.post("/logout", authenticateToken, userController.handleLogout);

    app.use("/", router);
};

export default initWebRoute;
