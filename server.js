const express=require("express");
const dotenv=require("dotenv");
const path = require('path');
const { default: mongoose } = require("mongoose");
const {router}=require("./backend/router/router");
const courseLib=require("./backend/lib/courselib")
dotenv.config();
const app= express();
const str=process.env.MONGO_CONNECTION_STRING;


app.use(express.static('frontend'));
app.use(express.json());
app.use("/",router);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
})

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});


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
        app.listen(process.env.PORT||3000,function(){
            console.log("Server is running.... on port 3000")
        })
    }
    
})

