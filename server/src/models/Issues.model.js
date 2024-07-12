const mongoose=require("mongoose")

const IssuesSchema=new mongoose.Schema('issues',{
    Challenges:{
        type:String,
        required:true,
    },
    images:[
        {
            type:String,
        }
    ],
    land:{
        type:mongoose.Types.ObjectId,
        ref:'Farm'
    }
})

const Issues=mongoose.model('Issues',IssuesSchema)

module.exports=Issues