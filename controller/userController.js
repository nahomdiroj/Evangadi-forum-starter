const register= async(req,res)=>{
    const{username, firstname, lastname, email,password}=req.body;
    if(!email||!password){
        return res.status(400).send("empty")
    }
    res.send("register")
}

const login= async(req,res)=>{
    res.send("login user")
}

const check=async(req,res)=>{
    res.send("check user")
}

module.exports={register,login,check}