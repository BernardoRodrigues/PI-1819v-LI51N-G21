module.exports = class ArtistModel {

    constructor(name, mbid, url, images) {
        this.name = name
        this.mbid = mbid;
        this.url = url;
        this.images = images;
    }

    static init(name, mbid, url, images) {
        return new ArtistModel(name, mbid, url, images)
    }

}