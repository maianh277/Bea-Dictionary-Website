import express from "express";
import userController from "../controller/userController.js";
import dictController from "../controller/dictController.js";
import middleware from "../middleware/middleware.js";

const initWebRoute = (app) => {
  const router = express.Router();

  router.post("/user", middleware, userController.getDetailUser);
  router.post("/signup", userController.handleSignup);
  router.post("/login", userController.handleLogin);
  router.post("/editUser", userController.handleEditUser);
  // router.post("/wordlists", dictController.savedWords);
  app.use("/", router);
};

export default initWebRoute;
