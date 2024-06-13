const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const {ksrtcmodel} = require("./models/ksrtc")
mongoose.connect("mongodb+srv://sandras02:sandrasmenon@cluster0.3g103sn.mongodb.net/ksrtcdb?retryWrites=true&w=majority&appName=Cluster0")
const app=express()
app.use(cors())
app.use(express.json())
const bcrypt=require("bcryptjs")

const generateHashedpassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}



app.listen(7070,()=>{
    console.log("server started")
})