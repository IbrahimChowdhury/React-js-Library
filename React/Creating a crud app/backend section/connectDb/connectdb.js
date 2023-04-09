let mongoose=require("mongoose")

module.exports=mongoose.connect("mongodb://127.0.0.1:27017/usersData2")
.then(()=>{
    console.log("mongoDB is connected")
})
.catch(()=>{
    console.log("mongoDB is not connected")
})