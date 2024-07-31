const {Router}=require("express")
const router=Router()
const verifyJWT=require("../middlewares/auth.js")
const {addSolution, addUpvote,fetchAllSolution}=require("../controllers/solutions.controller.js")
const {upload}=require("../middlewares/multer.middleware.js")

//Route to answer to any user problem and you can provide photos as proof
router.route("/add/:issueId").post(verifyJWT,
    upload.fields([
        {
            name:"images",
            maxCount:5
        }]),
    addSolution);

//Route to indicate the user who are benefitted from the solution
router.route("/like/:solutionId").patch(addUpvote);

router.route("/allSolution/:issueId").get(verifyJWT,fetchAllSolution)

module.exports=router 