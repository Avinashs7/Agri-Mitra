const {Router}=require("express")
const router=Router()
const verifyJWT=require("../middlewares/auth")
const {addSolution, addUpvote}=require("../controllers/solutions.controller")
const {upload}=require("../middlewares/multer.middleware")


router.route("/add").post(verifyJWT,
    upload.fields([
        {
            name:"images",
            maxCount:5
        }]),
    addSolution);

router.route("/like/:solutionId").patch(addUpvote);

module.exports=router 