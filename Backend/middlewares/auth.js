import jwt from "jsonwebtoken";
import {Unauthenticated_Error} from "../errors/index.error.js"
//import User from "../models/blogs/Users/User.model.js";
const auth = async(req, res, next) => {
    //check header if token exists
   const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new Unauthenticated_Error('No token provided')
    };
    const token = authHeader
    try{
        const payLoad = jwt.verify(token, process.env.JWT_SECRET_KEY);
        //Attaching user to job routes
        req.user = {userId:payLoad.userId};
        next()
    }catch(error){
        throw new Unauthenticated_Error('Not authorized to access this route')
    }
};

export default auth;

/*const auth = async(req, res, next) => {
    try{
        if(req.headers["x-access-token"]){
            const accessToken = req.headers["x-access-token"];
            const {userId, exp} = jwt.verify(accessToken,process.env.JWT_SECRET_KEY)
            if(exp < Date.now().valueOf()/1000){
                throw new Unauthenticated_Error("authentication failure");
            }
            res.locals.user = await User.findById(userId)
            next()
        }else{next()}
    }catch(err){
        throw new Unauthenticated_Error("authentication failure")
    }
}

export default auth;*/