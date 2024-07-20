const {v2}=require("cloudinary")
const fs =require("fs")

/**
 * Setting up the cloudinary configuration 
 * It is one time setup for establishing the endpoint where it needs to be uploaded
 */
v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

/**
 * General function used to upload a file from the disk storage to cloud 
 * This uses cloudinary service
 */
const uploadToCloudinary=async function(localPath){
    try{
        if(!localPath)return null;
        const response=await v2.uploader.upload(localPath,{
            resource_type:"auto"
        })
        fs.unlinkSync(localPath);
        return response;
    }
    catch(err){
        fs.unlinkSync(localPath);
        return null;
    }
}

module.exports=uploadToCloudinary