const mongoose=require("mongoose")

/**
 * Model to store any problems faced by the farmers
 * It has image section too to get the better clarity about the subject
 * Which inturn helps for the diagnosis
 * Also for fututre enhancement too online detection of plant diseases
 */
const IssuesSchema=new mongoose.Schema({
    challenges:{
        type:String,
        required:true,
    },
    images:[
        {
            type:String,
        }
    ],
    ownedBy:{
        type:mongoose.Types.ObjectId,
        ref:'Farm'
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
})

const Issues=mongoose.model('Issues',IssuesSchema)

module.exports=Issues