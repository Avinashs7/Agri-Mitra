const {Router}=require("express")
const router=Router()
const {addReport,getReport}=require("../controllers/report.controller.js")


//This is to add the current report status of the farm
router.route("/add/:farmId").post(addReport)

router.route("/get/:farmId").get(getReport)

module.exports=router