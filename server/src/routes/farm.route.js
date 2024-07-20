const {Router}=require("express")
const router=Router()
const {addFarm}=require("../controllers/farm.controller")
const verifyJWT=require("../middlewares/auth")

//This route is to add up the farms of the user
router.route("/add").post(verifyJWT,addFarm)

module.exports=router 