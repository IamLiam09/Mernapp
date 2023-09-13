// @desc Auth user/set token
// route POST /api/user/auth
// @access public
import asyncHandler from "express-async-handler";
const authUser = asyncHandler(async (req, res) => {  
	res.status(200).json({ message: "Auth User" });
	res.status(401);
	throw new Error("Something went wrong");
});

export { authUser }; 