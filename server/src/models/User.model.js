const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

/**
 * Model to store the user details 
 */
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    firstName:{
        type:String,
        required:true,
        index:true,
        trim:true,
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
    avatar:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["M","F","O"],
    },
    refreshToken:{
        type:String,
    },
    verified:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true
})

//Pre hook to define the logic before the event is occured in the db 
//Here the event used is save 
UserSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();     
    this.password=await bcrypt.hash(this.password,10);
    next()
})

//Method to inject in the database similar to stored procedure

//It returns the true or false based on the password. Since the stored password is hashed direct string match won't yield the result hence it is compared using the package bcrypt
UserSchema.methods.checkPassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

//Method to generate the access token
UserSchema.methods.generateAccessToken=function (){
    return jwt.sign({
        _id:this._id,
        name:this.firstName+" "+this.lastName,
        email:this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

//Method to generate the refresh token same as the access token logic but the expiry period is more
UserSchema.methods.generateRefreshToken=function (){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}

const User=mongoose.model("user",UserSchema)

module.exports=User