const {Router}=require("express");
const router=Router();
const {registerUser, loginUser,verifyOtp}=require("../controllers/user.controller")
const {upload}=require("../middlewares/multer.middleware")


router.route("/register").post(upload.single("avatar"),registerUser)
router.route("/login").post(loginUser)
router.route("/verify/:id").post(verifyOtp)

module.exports=router