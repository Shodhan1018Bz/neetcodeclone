const express=require('express');
const {getAllCourses}=require("../lib/courselib")

const router = express.Router()

router.get("/coursesList",async (req,res,next)=>{
    const courses= await getAllCourses();
    res.status(200).json({courses:courses});
});


module.exports={router};