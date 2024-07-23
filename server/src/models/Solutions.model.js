const mongoose=require("mongoose")

/**
 * The model to store the answer from the user regarding other's issue which they have come across or familiar with
 * This is the main aspect where we connect and build together comes to play
 */
const SolutionSchema=new mongoose.Schema({
    answer:{
        type:String,
        required:true,
    },
    upvote:[
        {
            type:mongoose.Types.ObjectId,
            ref:'user'
        }
    ],
    images:[
        {
            type:String,
        }
    ],
    advisedBy:{
        type:mongoose.Types.ObjectId,
        ref:'user',
    },
    solves:{
        type:mongoose.Types.ObjectId,
        ref:'Issues'
    }
})


const Solution=mongoose.model("Solution",SolutionSchema)

module.exports=Solution