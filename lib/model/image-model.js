module.exports = class ImageModel {

    constructor(url) {
        this.url = url
    }

    static init(url) {
        return new ImageModel(url)
    }

}