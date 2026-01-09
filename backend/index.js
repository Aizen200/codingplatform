const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const authRoutes=require("./authentication/auth")
const app=express()
const questionroutes=require("./routes/Route")
const seed=require("./seed/Seedquestion")
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.use("/auth",authRoutes)
app.use("/questions",questionroutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running..")
})