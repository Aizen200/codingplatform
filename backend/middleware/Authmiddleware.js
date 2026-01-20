const jwt=require("jsonwebtoken")
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
const tokenmiddleware=(req,res,next)=>{
    const{authorization}=req.headers
    if(!authorization){
        return res.status(400).json({error:"Authorization is not available"})
    }
    if(authorization.split(" ")[0]!="Bearer"){
        return res.status(400).json({error:"Invalid token"})
    }
        jwt.verify(authorization.split(" ")[1],process.env.JWT_secret,(err,decoded)=>{
            if(err){
                 return res.status(403).json({ error: "Invalid or expired token" })
            }
            req.user=decoded
             next()
        })
         
    
       
    
   
}
module.exports={loginmiddleware,signUpmiddleware,tokenmiddleware}