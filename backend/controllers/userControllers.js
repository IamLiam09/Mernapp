import asyncHandler from "express-async-handler";
// @desc Auth user/set token
// route POST /api/user/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Auth User" });
});
// @desc Register a new user
// route POST /api/user
// @access public
const RegisterUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Register User" });
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
	RegisterUser,
	LogoutUser,
	getUserProfile,
	updateUserProfile,
};
