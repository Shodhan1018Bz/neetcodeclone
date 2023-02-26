const express=require("express");

const app= express();

app.get("/",function(req,res){
    res.send("Hello world!!")
})

app.get("/myname",function(req,res){
    res.send("Shodhan ")
})

app.listen(3000,function(){
    console.log("Server is runnig.... on port 3000")
})