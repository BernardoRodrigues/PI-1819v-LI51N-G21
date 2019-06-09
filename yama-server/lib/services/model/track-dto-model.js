module.exports = class TrackDtoModel {

    constructor(name, url, duration, artist) {
        this.name = name
        this.url = url
        this.duration = duration
        this.artist = artist
    }

    static init(name, url, duration, artist) {
        return new TrackDtoModel(name, url, duration, artist)
    }

}