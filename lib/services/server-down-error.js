module.exports = class ServerDownError extends Error {

    constructor(message, status) {
        super(message)
        this.message = message
        this.statusCode = status
    }
}