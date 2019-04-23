'use strict'
class AlbumDtoModel {

    constructor(name, url, mbid, images, artist) {
        this.name = name
        this.url = url
        this.mbid = mbid
        this.images = images
        this.artist = artist
    }

    static init(name, url, mbid, images, artist) {
        return new AlbumDtoModel(name, url, mbid, images, artist)
    }

}
module.exports = AlbumDtoModel