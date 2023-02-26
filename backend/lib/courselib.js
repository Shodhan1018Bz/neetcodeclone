const courseModel=require("../models/courseModel")
module.exports.getAllCourses=async function(){
        return await courseModel.find({});
}

module.exports.createCourse=async function(courseInput){
    const course= new courseModel(courseInput);
    await course.save();
}

module.exports.updateCourse=async function(courseId,updateInput){
    await courseModel.findOneAndUpdate({_id:courseId},updateInput);
}

module.exports.createFirstCourse=async function(){
    const courses=await courseModel.find({});
    if(courses && courses.length>=1)
    return ;
    const firstCourse={
        "title":"bz DSA",
        "level":"easy",
    };
    const course= new courseModel(firstCourse);
    await course.save();
}