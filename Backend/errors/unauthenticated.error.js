import  CustomAPI_ERROR  from "./custom.error.js";
import  StatusCodes  from "http-status-codes";
class Unauthenticated_Error extends CustomAPI_ERROR {
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
};

export default Unauthenticated_Error