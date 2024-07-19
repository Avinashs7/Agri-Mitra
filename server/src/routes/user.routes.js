const {Router}=require("express");
const router=Router();
const {registerUser, loginUser}=require("../controllers/user.controller")
const {upload}=require("../middlewares/multer.middleware")


router.route("/register").post(upload.single("avatar"),registerUser)
router.route("/login").post(loginUser)

module.exports=router