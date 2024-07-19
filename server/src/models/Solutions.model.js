const mongoose=require("mongoose")

const SolutionSchema=new mongoose.Schema({
    answer:{
        type:String,
        required:true,
    },
    upvote:[
        {
            type:mongoose.Types.ObjectId,
            ref:'User'
        }
    ],
    images:[
        {
            type:String,
        }
    ],
    advisedBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
    }
})


const Solution=mongoose.model("Solution",SolutionSchema)

module.exports=Solution