let mongoose=require("mongoose")

let usersSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports=usersSchema
