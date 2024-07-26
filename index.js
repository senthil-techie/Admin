const express = require('express')
const cors = require('cors')
const User = require('./models/UserSchema') 
const Department = require('./models/DepartmentSchema')
const mongoose  = require('mongoose')
const bcrypt = require('bcryptjs')
const UserModel = require('./models/UserSchema')
const DepModel = require('./models/DepartmentSchema')
require('dotenv').config()
const app = express()

const bcryptSalt = bcrypt.genSaltSync(10)

app.use(express.json())

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_URL);
 

app.get('/test', (req, res)=>{
    res.json('test ok')
})

 
app.post('/createuser',async (req, res)=>{
    const {name, email, password, department} = req.body;
    try{
        const userDoc = await User.create({
            name,
             email,
             password:bcrypt.hashSync(password, bcryptSalt),
             department
        })
        res.json(userDoc)
    }catch(e){
        res.status(422).json(e)
    } 
})

app.get('/createuser', async(req,res)=>{
    const userData = await UserModel.find({})
    res.json({success: true, data: userData})
})

app.put('/createuser', async(req, res)=>{
    console.log(req.body)
    const {id,...rest} = req.body;
    console.log(rest)
    const userId = await UserModel.updateOne({_id : id},rest)
    req.send({success:true, message:"Data Updated Successfully", data : userId})
})

app.delete("/createuser/:id", async(req, res)=>{
    const uId = req.params.id
    console.log(uId) 
    const uData  = await UserModel.deleteOne({_id : uId})
    res.send({success: true , message : "data deleted Successfully", data : uData})
})
  

app.post('/createdepartment',async(req, res)=>{
    const { department, description} = req.body;
   try{
    const depDoc = await Department.create({
        department,
        description
    })
    res.json(depDoc)
   }catch(e){
    res.status(422).json(e)
   }
})

app.get('/createdepartment', async(req,res)=>{
    const depData = await DepModel.find({})
    res.json({success: true, data: depData}) 
})

app.put('/createdepartment', async(req, res)=>{
    console.log(req.body)
    const {id,...rest} = req.body;
    console.log(rest)
    const depId = await UserModel.updateOne({_id : id},rest)
    req.send({success:true, message:"Data Updated Successfully", data: depId})
})

app.delete("/createdepartment/:id", async(req, res)=>{
    const dId = req.params.id
    console.log(dId)
    const dData  = await DepModel.deleteOne({_id : dId})
    res.send({success: true , message : "data deleted Successfully", data : dData})
})


app.listen(4000)


// TimetoCode