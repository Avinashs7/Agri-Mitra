const {Router}=require("express")
const router=Router()
const {addReport}=require("../controllers/report.controller.js")

router.route("/add").post(addReport)

module.exports=router