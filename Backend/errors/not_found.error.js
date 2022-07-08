import CustomAPI_ERROR from "./custom.error.js";
import { StatusCodes } from "http-status-codes";

class NotFound_Error extends CustomAPI_ERROR{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND
    }
};

export default NotFound_Error