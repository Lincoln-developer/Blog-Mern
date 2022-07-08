import  CustomAPI_ERROR  from "./custom.error.js";
import  StatusCodes  from "http-status-codes";
class Bad_Request_Error extends CustomAPI_ERROR {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
};

export default Bad_Request_Error