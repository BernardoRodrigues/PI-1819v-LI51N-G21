module.exports = function() {
    const lastFmApiKey = require('./last-fm-api-key-config.json')
    const lastFmUrlConfig = require('./last-fm-url-config.json')
    const elasticSearchConfig = require('./elastic-search-config.json')
    const apiKeyQueryString = `api_key=${lastFmApiKey.apiKey}`
    const elasticSearchUrl = `${elasticSearchConfig.baseUrl}:${elasticSearchConfig.port}`

    function getArtistsEndpoint(name, page = 1) {
        return `${lastFmUrlConfig.baseUrl}/?method=artist.search&artist=${formatWhiteSpace(name)}&page=${page}&${apiKeyQueryString}&format=json`
    }

    function getAlbumInfoEndpoint(mbid, page = 1) {
        return `${lastfmUrlConfig.baseUrl}/?method=album.getinfo&page=${page}&mbid=${mbid}&${apiKeyQueryString}&format=json`
    }

    function getTopAlbumsEndpoint(mbid, page = 1) {
        return `${lastFmUrlConfig.baseUrl}/?method=artist.gettopalbums&page=${page}&mbid=${mbid}&${apiKeyQueryString}&format=json`
    }

    function createPlaylistEndpoint() {
        return `${elasticSearchUrl}/playlists/playlist`
    }

    function accessPlaylistEndpoint(playlistId) {
        return `${elasticSearchUrl}/playlists/playlist/${playlistId}`
    }

    function accessTrackListEndpoint(playlistId) {
        return `${elasticSearchUrl}/tracks/track/${playlistId}`
    }

    function getAllPlaylistsEndpoint() {
        return `${elasticSearchUrl}/playlists/playlist/_search`
    }
    
    function getAllTracksListEndpoint(playlistId) {
        return `${elasticSearchUrl}/tracks/track/${playlistId}/_search`
    }

    function formatWhiteSpace(value) {
        return value.replace(/ /gi, '+')
    }

    return {
        getArtistsEndpoint: getArtistsEndpoint,
        getAlbumInfoEndpoint: getAlbumInfoEndpoint,
        getTopAlbumsEndpoint: getTopAlbumsEndpoint,
        createPlaylistEndpoint: createPlaylistEndpoint,
        deletePlaylistEndpoint: accessPlaylistEndpoint,
        updatePlaylistEndpoint: accessPlaylistEndpoint,
        getPlaylistEndpoint: accessPlaylistEndpoint,
        createTracksListEndpoint: createTracksListEndpoint,
        deleteTracksListEndpoint: accessTrackListEndpoint,
        updateTracksListEndpoint: accessTrackListEndpoint,
        getTracksListEndpoint: accessTrackListEndpoint,
        getAllPlaylistsEndpoint: getAllPlaylistsEndpoint,
        getAllTracksListEndpoint: getAllTracksListEndpoint
    }
}()