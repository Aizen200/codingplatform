const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

require("dotenv").config()
const authRoutes=require("./authentication/auth")
const app=express()
const questionroutes=require("./routes/Route")
const seed=require("./seed/Seedquestion")
const submissionroutes=require("./routes/Submit")
const solvingroute=require('./routes/Solve')
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.use("/auth",authRoutes)
app.use("/questions",questionroutes)
app.use("/submission",submissionroutes)
app.use("/solve",solvingroute)
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running..")
})