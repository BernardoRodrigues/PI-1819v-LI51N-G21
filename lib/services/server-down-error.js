module.exports = class ServerDownError extends Error {

    constructor(message) {
        this.message = message
        this.statusCode = 500
    }
    
    get statusCode() {
        return this.statusCode
    }

    get message() {
        return this.message
    }

}