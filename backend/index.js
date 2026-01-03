const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const authRoutes=require("./authentication/auth")
const app=express()
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.use("/auth",authRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running..")
})