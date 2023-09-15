import express from "express";
const router = express.Router();
import {
	authUser,
	RegisterUser,
	LogoutUser,
	getUserProfile,
	updateUserProfile,
} from "../controllers/userControllers.js";

router.post("/", authUser);
router.post("/auth", authUser);
router.post("/logout", LogoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
