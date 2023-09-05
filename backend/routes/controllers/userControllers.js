// @desc Auth user/set token
// route POST /api/user/auth
// @access public
import asyncHandler from "express-async-handler"
const authUser = (req, res) => {
    res.status(200).json({ message: "Auth User"})
}

export{
    authUser
}