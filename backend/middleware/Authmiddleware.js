
const signUpmiddleware=(req,res,next)=>{
    const {username,email,password}=req.body
    if(!username || !email || !password){
        return res.status(400).json({error:"All the fields are required"})

    }
    if (!email.includes("@")){
        return res.status(400).json({error:"Invalid email"})
    }
    next()
}
const loginmiddleware=(req,res,next)=>{
    const {email,password}=req.body
    if(!email||!password){
        return res.status(400).json({error:"All the fields are required"})
    }
    if(!email.includes("@")){
        return res.status(400).json({error:"Invalid email"})
    }
    next()

}

module.exports={loginmiddleware,signUpmiddleware}