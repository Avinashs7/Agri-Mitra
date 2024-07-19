const {Router}=require("express")
const router=Router()
const {addIssue}=require("../controllers/issue.controller.js")
const verifyJWT=require("../middlewares/auth.js")
const {upload}=require("../middlewares/multer.middleware.js")

router.route("/add/:farmId").post(verifyJWT,
    upload.fields([{
    name:"images",
    maxCount:5
}]),addIssue)


module.exports=router