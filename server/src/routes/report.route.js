const {Router}=require("express")
const router=Router()
const {addReport}=require("../controllers/report.controller.js")


//This is to add the current report status of the farm
router.route("/add/:farmId").post(addReport)

module.exports=router