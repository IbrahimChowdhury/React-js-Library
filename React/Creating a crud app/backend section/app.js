let express=require("express")
let mongoose=require("mongoose")
let  cors=require("cors")
let app=express()
require("./connectDb/connectdb")
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let usersSchema= require("./model/usersSchema")
let users=mongoose.model("userslist4",usersSchema)



app.get("/users",async(req,res)=>{
    let allusers= await users.find()
    res.status(200).json(allusers)
})

app.post("/users",async(req,res)=>{
    try {
       
        let newUser= new users({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        await newUser.save()
        
        res.status(202).json(newUser)

    } catch (error) {
        res.status(404).json(error)
    }
})


app.delete("/users/:id",async(req,res)=>{
    let usersID=req.params.id
    let deleteduser=await users.findByIdAndDelete({_id:usersID})
    res.status(202).json(deleteduser)
})

app.put("/users/:id",async(req,res)=>{
    let userID=req.params.id
    let updatedUser= await users.findByIdAndUpdate(
        {
            _id:userID
        },
        {
            $set:{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }
        },
        {
            new:true
        }
    )

    res.status(200).json(updatedUser)
})


module.exports=app