const {Router}=require("express")
const router=Router()
const {addFarm}=require("../controllers/farm.controller")
const verifyJWT=require("../middlewares/auth")

router.route("/add").post(verifyJWT,addFarm)

module.exports=router 