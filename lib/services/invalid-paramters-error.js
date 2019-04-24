module.exports = class InvalidParametersError extends Error {

    constructor(message) {
        this.message = message
        this.statusCode = 400
    }

    
    get statusCode() {
        return this.statusCode
    }

    get message() {
        return this.message
    }

}