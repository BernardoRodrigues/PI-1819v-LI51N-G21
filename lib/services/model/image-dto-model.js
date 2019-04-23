'use strict'
 class ImageDtoModel {

    constructor(url) {
        this.url = url
    }

    static init(url) {
        return new ImageDtoModel(url)
    }

}
module.exports = ImageDtoModel