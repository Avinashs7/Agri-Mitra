const {Router}=require("express")
const { predictCrop,getPredictedCrop } = require("../controllers/predict.controller.js")
const router=Router()

//This route will handle the model prediction output processing and yet to be developed
router.route("/crop/:farmId").post(predictCrop)

router.route("/get/:reportId").get(getPredictedCrop)

module.exports=router 