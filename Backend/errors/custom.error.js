class CustomAPI_ERROR extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (message, statusCode) => {
    return CustomAPI_ERROR(message, statusCode)
};

export default CustomAPI_ERROR