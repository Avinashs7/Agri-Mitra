const mongoose=require("mongoose")

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
    }
})

const Issues=mongoose.model('Issues',IssuesSchema)

module.exports=Issues