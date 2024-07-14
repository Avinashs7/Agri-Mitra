const {Router}=require("express");
const router=Router();
const {registerUser}=require("../controllers/user.controller")
const {upload}=require("../middlewares/multer.middleware")


router.route("/register").post(upload.single({'name':avatar}),registerUser)

module.exports=router