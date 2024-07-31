const cron=require("node-cron")
const {deleteOtp}=require("../controllers/user.controller");

/**
 * Background process which needs to be handled when server is up after certain time 
 * Here there is only one job as of now to delete the expired otp documents and the it runs every minute
 */
cron.schedule('* * * * *',deleteOtp);
