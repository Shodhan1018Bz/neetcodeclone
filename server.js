const express=require("express");
const dotenv=require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();
const app= express();
const str=process.env.MONGO_CONNECTION_STRING;
const courseLib=require("./backend/lib/courselib")

app.use(express.static('frontend'));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
})



mongoose.set('strictQuery', true);
mongoose.connect(str,async (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected to database");
        await courseLib.createFirstCourse();
        const courses= await courseLib.getAllCourses();
        console.log(courses)
        app.listen(3000,function(){
            
            console.log("Server is running.... on port 3000")
        })
    }
    
})

