import express from "express";
import userController from "../controller/userController.js";
import middleware from "../middleware/middleware.js";

const initWebRoute = (app) => {
    const router = express.Router();

    router.post("/user", middleware, userController.getDetailUser);
    router.post("/signup", userController.handleSignup);
    router.post("/login", userController.handleLogin);

    app.use("/", router);
};

export default initWebRoute;
