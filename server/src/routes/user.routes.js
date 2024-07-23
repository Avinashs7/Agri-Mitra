const {Router}=require("express");
const router=Router();
const {registerUser, loginUser,verifyOtp,getUser,logout}=require("../controllers/user.controller")
const {upload}=require("../middlewares/multer.middleware");
const verifyJWT = require("../middlewares/auth");

//Route to handle signup takes in email,firstName,lastName,phone number,gender and stores it also email verification logic is implemented
router.route("/register").post(upload.single("avatar"),registerUser)

//It checks whether the provided email has an account or not
router.route("/login").post(loginUser)

//Route to validate the otp that was generated in the signup route
router.route("/verify/:id").post(verifyOtp)

//To get the user details if the user is logged in and it is verified from auth middleware
router.route("/getUser").get(verifyJWT,getUser)

router.route("/logout").get(logout);

module.exports=router