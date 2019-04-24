module.exports = class InvalidParametersError extends Error {

    constructor(message, status) {
        super(message)
        this.message = message
        this.statusCode = status
    }

}