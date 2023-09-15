import express from "express";
const router = express.Router();
import {
	authUser,
	registerUser,
	LogoutUser,
	getUserProfile,
	updateUserProfile,
} from "../controllers/userControllers.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", LogoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
