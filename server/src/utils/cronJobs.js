const cron=require("node-cron")
const {deleteOtp}=require("../controllers/user.controller");


cron.schedule('* * * * *',deleteOtp);


