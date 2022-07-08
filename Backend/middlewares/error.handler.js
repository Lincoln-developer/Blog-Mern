import  CustomAPI_ERROR  from "../errors/custom.error.js";
import  StatusCodes from "http-status-codes";
const errorHandler = async(err, req, res,next) => {
    if(err instanceof CustomAPI_ERROR){
        return res.status(err.statusCode).json({message:err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:"Something went wrong, please try again"
    })

    
};

export default errorHandler;