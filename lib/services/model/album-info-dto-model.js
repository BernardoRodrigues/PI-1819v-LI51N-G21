export default class AlbumInfoDtoModel{

    constructor(name, mbid, artistName, url, images, tracks) {
        this.name = name
        this.mbid = mbid
        this.artistName = artistName
        this.url = url
        this.images = images
        this.tracks = tracks
    }

    static init(name, mbid, artist, url, images, tracks) {
        return new AlbumInfoDtoModel(name, mbid, artist, url, images, tracks)
    }


}