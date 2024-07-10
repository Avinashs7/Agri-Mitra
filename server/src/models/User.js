const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema("user",{
    email:{
        type:String,
        required:true,
        unique:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String
    },
    gender:{
        type:String,
        enum:["M","F","O"],
    }
},{
    timestamps:true
})

const User=mongoose.model("user",UserSchema)

module.exports=User