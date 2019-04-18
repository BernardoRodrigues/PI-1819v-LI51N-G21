export default class InvalidParameterError extends Error {

    constructor(message, status) {
        this.message = message
        this.statusCode = status
    }

}