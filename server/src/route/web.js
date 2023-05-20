import express from "express";
import userController from "../controller/userController.js";
import authenticateToken from "../middleware/authenticateToken.js";
import middleware from "../middleware/middleware.js";

const initWebRoute = (app) => {
    const router = express.Router();

    router.post("/user", middleware, userController.getDetailUser);
    router.post("/signup", middleware, userController.handleSignup);
    router.post("/login", userController.handleLogin);
    router.post("/logout", userController.handleLogout);

    app.use("/", router);
};

export default initWebRoute;
