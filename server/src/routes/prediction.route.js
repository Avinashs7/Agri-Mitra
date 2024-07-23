const {Router}=require("express")
const { predictCrop } = require("../controllers/predict.controller")
const router=Router()

//This route will handle the model prediction output processing and yet to be developed
router.route("/crop/:farmId").post(predictCrop)

module.exports=router 