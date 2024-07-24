const {Router}=require("express")
const router=Router()
const {addIssue, fetchAllIssues, fetchIssueById}=require("../controllers/issue.controller.js")
const verifyJWT=require("../middlewares/auth.js")
const {upload}=require("../middlewares/multer.middleware.js")

//Route to handle the issues of users and also the photocopy of it 
router.route("/add/:farmId").post(verifyJWT,
    upload.fields([
        {
            name:"images",
            maxCount:5
        }]),
        addIssue);

//route to fetch all the issues of farmers
router.route("/allIssues").get(verifyJWT,fetchAllIssues)

//route to fetch particular the issue of a farmer
router.route("/getIssue/:issueId").get(verifyJWT,fetchIssueById)

module.exports=router