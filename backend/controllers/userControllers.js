import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// @desc Auth user/set token
// route POST /api/user/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Auth User" });
});
// @desc Register a new user
// route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}
	const user = await User.create({
		name,
		email,
		password,
	});
	if(user){
		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
		})
	}else{
		res.status(400)
		throw new Error("Invalid user data")
	}
});
// @desc Logout user
// route POST /api/user/logout
// @access public
const LogoutUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Logout User " });
});
// Get user profile
// route POST /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "User Profile" });
});
// Get Update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Update user profile " });
});

export {
	authUser,
	registerUser,
	LogoutUser,
	getUserProfile,
	updateUserProfile,
};
