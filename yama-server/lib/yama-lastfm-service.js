module.exports = function (lastFmService) {

    const InvalidParameterError = require('./invalid-parameter-error')
    const ArtistDto = require('./services/model/artist-dto-model')
    const ImageDto = require('./services/model/image-dto-model')
    const AlbumDto = require('./services/model/album-dto-model')

    function getArtists(artistDto, page = 1) {
        if (!artistDto || !artistDto.name || artistDto.name.length === 0) {
            throw new InvalidParameterError("Artist name cannot be empty", 400)
        }
        const artist = mapArtistToArtistDto(artistDto)
        return lastFmService.getArtists(artist, page)
    }


    function getTopAlbums(artistDto, page = 1) {
        if (!artistDto || !artistDto.mbid || artistDto.mbid.length === 0) {
            throw new InvalidParameterError("Artist mbid cannot be empty", 400)
        }
        const artist = mapArtistToArtistDto(artistDto)
        return lastFmService.getTopAlbums(artist, page)
    }

    function getAlbumInfo(albumDto) {
        if (!albumDto || !albumDto.mbid || albumDto.mbid.length === 0) {
            throw new InvalidParameterError("Album mbid cannot be empty", 400)
        }
        const album = mapAlbumToAlbumDto(albumDto)
        return lastFmService.getAlbumInfo(album)
    }

    //Mappers

    function mapArtistToArtistDto(artist) {
        return ArtistDto.init(artist.name, artist.mbid, artist.url,
            artist.images ? artist.images.map(i => mapImageToImageDto(i.url)) : [])
    }

    function mapImageToImageDto(image) {
        return ImageDto.init(image.url)
    }

    function mapAlbumToAlbumDto(album) {
        return AlbumDto.init(album.name, album.url, album.mbid,
            album.images ? album.images.map(i => mapImageToImageDto(i)) : [], album.artist ? mapArtistToArtistDto(album.artist) : album.artist)
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo
    }

}