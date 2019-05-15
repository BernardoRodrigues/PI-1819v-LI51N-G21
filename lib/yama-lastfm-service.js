module.exports = function(lastFmService) {

    const InvalidParameterError = require('./invalid-parameter-error')
    const ArtistDto = require('./services/model/artist-dto-model')
    const ImageDto = require('./services/model/image-dto-model')
    const AlbumDto = require('./services/model/album-dto-model')

    async function getArtists(artistDto, page = 1) {
        if (!artist || !artist.name || artist.name.length === 0) {
            throw new InvalidParameterError("Artist name cannot be empty", 400)
        }
        const artist = mapArtistToArtistDto(artistDto)
        return lastFmService.getArtists(artist, page)
    }

    
    async function getTopAlbums(artistDto, page = 1) {
        if (!artist || !artist.mbid || artist.mbid.length === 0) {
            throw new InvalidParameterError("Artist mbid cannot be empty", 400)
        }
        const artist = mapArtistToArtistDto(artistDto)
        return lastFmService.getTopAlbums(artist, page)
    }
    
    async function getAlbumInfo(albumDto) {
        if (!album || !album.mbid || album.mbid.length === 0) {
            throw new InvalidParameterError("Album mbid cannot be empty", 400)
        }
        const album = mapAlbumToAlbumDto(albumDto)
        return lastFmService.getAlbumInfo(album)
    }
    
    //Mappers
    
    function mapArtistToArtistDto(artist) {
        return ArtistDto.init(artist.name, artist.mbid, artist.url, 
            artist.images? artist.images.map(i => mapImageToImageDto(i.url)):[])
    }

    function mapImageToImageDto(image) {
        return ImageDto.init(image.url)
    }
    
    function mapAlbumToAlbumDto(album) {
        return AlbumDto.init(album.name, album.url, album.mbid, 
            album.images? album.images.map(i => mapImageToImageDto(i)):[], album.artist? mapArtistToArtistDto(album.artist):album.artist)
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo
    }

}