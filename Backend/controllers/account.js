import User from "../models/blogs/Users/User.model.js";
//Registering a user
const registerUser = async(req,res) => {
    try {
        const user = await User.create({...req.body});
        const token = user.createJWT()
        res.status(200).send({
         user:{name:user.name,email:user.email},token
        })
    }catch(err){
        res.status(500).json({
            Error:err,
            message:"server error, signup request failed"
        })
    }
};
//loging into user account
const userLogin = async(req,res)=>{
    try{
        const {name,password} = req.body;
        //check validity of provided name and password
        if(!name || !password){
          return res.status(500).json({
            message:"Please provide valid name and password"
          })
        };
        //finding user by email inorder to login
         const user =  User.findOne({name});
        //check if email exits in database
       if(!user){
         return res.status(500).json({
            message:"invalid credentials"
         })
        }
       //comparing passwords
       const isPasswordCorrect = await user.comparePasswords(password);
        //check if entered password matches account password
       if(!isPasswordCorrect) return res.status(500).json({
          message:"invalid credentials"
       })
       const token = user.createJWT();
       res.status(200).json({user:{name:user.name},token})
    }catch(err){
        res.status(500).json({
            Error:err,
            message:"server error, login request failed"
        })
    }
    
};


export  {
    registerUser,
    userLogin
}