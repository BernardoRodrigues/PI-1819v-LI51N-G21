module.exports = class TrackModel {

    constructor(name, url, duration, artist) {
        this.name = name
        this.url = url
        this.duration = duration
        this.artist = artist
    }

    static init(name, url, duration, artist) {
        return new TrackModel(name, url, duration, artist)
    }

}