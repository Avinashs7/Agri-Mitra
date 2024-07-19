require("dotenv").config()

const {connectDB}=require("./db/config");
const app=require("./app.js")
const PORT=process.env.PORT||8080;

//DB connection logic 
connectDB()
.then(()=>{
    //When the app is activated then in event on if there is an error occured then it terminates the process.
    app.on("error",(error)=>{
        console.error(error);
        process.exit(1);
    })
    app.listen(PORT,()=>{
        console.log(`Server is running at http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB error",error);
})
