const {Router}=require("express");
const router=Router();
const {registerUser, loginUser,verifyOtp,getUser}=require("../controllers/user.controller")
const {upload}=require("../middlewares/multer.middleware");
const verifyJWT = require("../middlewares/auth");


router.route("/register").post(upload.single("avatar"),registerUser)
router.route("/login").post(loginUser)
router.route("/verify/:id").post(verifyOtp)
router.route("/getUser").get(verifyJWT,getUser)

module.exports=router