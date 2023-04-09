let express=require("express")
let mongoose =require("mongoose")
let cors=require("cors")
let app=express()
let port =4000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


let usersSchema=mongoose.Schema({
    id:{
        type:String
    },
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

let usersModel= mongoose.model("usersdata3",usersSchema)



app.post("/users",async(req,res)=>{
    try {
        let newUser= new usersModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        await newUser.save()
        res.status(200).json(newUser)

    } catch (error) {
        res.status(404).json(error)
    }
})

app.get("/users",async(req,res)=>{
    try {
        
        let allusers= await usersModel.find()
        res.status(202).json(allusers)

    } catch (error) {
        res.status(404).json(allusers)
    }
})


app.delete("/users/:id", async(req,res)=>{
    let userID=req.params.id
    await usersModel.findByIdAndDelete({_id:userID})
})

app.put("/users/:id",async(req,res)=>{
    try {
        
        let userID=req.params.id
        // let name=req.body.name
        // let email=req.body.email
        // let password=req.body.password
        let updatedUser= await usersModel.findByIdAndUpdate(
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

        if(updatedUser)
        {
            res.status(200).json(updatedUser)
        }
        else{
            res.status(404).json({
                msg:"data is notb updated"
            })
        }

    } catch (error) {
        res.status(505).json({
            msg:error
        })
    }
})




mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/usersData2")
.then(()=>{
    console.log("mongoDB is connected")
})
.catch(()=>{
    console.log("mongoDB is not connected")
})


app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})