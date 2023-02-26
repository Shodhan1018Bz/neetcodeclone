const express=require("express");

const app= express();

app.use(express.static('frontend'));

app.get("/html",(req,res)=>{
    res.sendFile(__dirname+"/frontend/index.html");
})



app.listen(3000,function(){
    console.log("Server is running.... on port 3000")
})