const express=require("express");
const dotenv=require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();
const app= express();
const str=process.env.MONGO_CONNECTION_STRING;
app.use(express.static('frontend'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
})
mongoose.set('strictQuery', true);
mongoose.connect(str,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        app.listen(3000,function(){
            console.log("Connected to database");
            console.log("Server is running.... on port 3000")
        })
    }
    
})

