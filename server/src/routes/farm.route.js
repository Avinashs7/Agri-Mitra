const {Router}=require("express")
const router=Router()
const {addFarm,getFarms}=require("../controllers/farm.controller")
const verifyJWT=require("../middlewares/auth")

//This route is to add up the farms of the user
router.route("/add").post(verifyJWT,addFarm)

//This route is to get all the farm lands of a specific user
router.route("/getFarms").get(verifyJWT,getFarms)

module.exports=router 