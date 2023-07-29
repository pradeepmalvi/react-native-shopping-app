import express from "express";
import { getMyProfile, login, logout, signup } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/logout").get(isAuthenticated, logout);
router.route("/me").get(isAuthenticated, getMyProfile);

export default router;
