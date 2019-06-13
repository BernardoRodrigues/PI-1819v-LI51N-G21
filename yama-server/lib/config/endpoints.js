'use strict'

module.exports = function() {
    const lastFmApiKey = require('./last-fm-api-key-config.json')
    const lastFmUrlConfig = require('./last-fm-url-config.json')
    const elasticSearchConfig = require('./elastic-search-config.json')
    const apiKeyQueryString = `api_key=${lastFmApiKey.apiKey}`
    const elasticSearchUrl = `${elasticSearchConfig.baseUrl}:${elasticSearchConfig.port}`

    function getArtistsEndpoint(name, page = 1) {
        return `${lastFmUrlConfig.baseUrl}/?method=artist.search&artist=${formatWhiteSpace(name)}&page=${page}&${apiKeyQueryString}&format=json`
    }

    function getAlbumInfoEndpoint(mbid) {
        return `${lastFmUrlConfig.baseUrl}/?method=album.getinfo&mbid=${mbid}&${apiKeyQueryString}&format=json`
    }

    function getTopAlbumsEndpoint(mbid, page = 1) {
        return `${lastFmUrlConfig.baseUrl}/?method=artist.gettopalbums&page=${page}&mbid=${mbid}&${apiKeyQueryString}&format=json`
    }

    function accessUsersEndpoint() {
        return `http://${elasticSearchUrl}/auth/users`
    }

    function searchUsersEndpoint() {
        return `http://${accessUsersEndpoint()}/_search`
    }

    function getUsersList(usersListId) {
        return `http://${accessUsersEndpoint()}/${usersListId}`
    }
 
    function updateUsersEndpoint(usersListId) {
        return `${accessUsersEndpoint()}/${usersListId}/_update`
    }

    function createPlaylistsListEndpoint() {
        return `http://${elasticSearchUrl}/users/playlists`
    }

    function getAllPlaylistsEndpoint() {
        return `${createPlaylistsListEndpoint()}/_search`
    }

    function updatePlaylistsListEndpoint(playlistListId) {
        return `${createPlaylistsListEndpoint()}/${playlistListId}/_update`
    }

    function createPlaylistEndpoint() {
        return `http://${elasticSearchUrl}/playlists/playlist`
    }

    function accessPlaylistEndpoint(playlistId) {
        return `http://${elasticSearchUrl}/playlists/playlist/${playlistId}`
    }

    function accessTrackListEndpoint(playlistId) {
        return `http://${elasticSearchUrl}/tracks/track/${playlistId}`
    }

    function addAndRemoveTrackEndpoint(id) {
        return `${accessTrackListEndpoint(id)}/_update`
    }

    function formatWhiteSpace(value) {
        return value.replace(/ /gi, '+')
    }

    return {
        getArtistsEndpoint: getArtistsEndpoint,
        getAlbumInfoEndpoint: getAlbumInfoEndpoint,
        getTopAlbumsEndpoint: getTopAlbumsEndpoint,
        accessUsersEndpoint: accessUsersEndpoint,
        updateUsersEndpoint: updateUsersEndpoint,
        searchUsersEndpoint: searchUsersEndpoint,
        getUsersList: getUsersList,
        createPlaylistsListEndpoint: createPlaylistsListEndpoint,
        updatePlaylistsListEndpoint: updatePlaylistsListEndpoint,
        createPlaylistEndpoint: createPlaylistEndpoint,
        deletePlaylistEndpoint: accessPlaylistEndpoint,
        updatePlaylistEndpoint: accessPlaylistEndpoint,
        getPlaylistEndpoint: accessPlaylistEndpoint,
        createTracksListEndpoint: accessTrackListEndpoint,
        deleteTracksListEndpoint: accessTrackListEndpoint,
        updateTracksListEndpoint: accessTrackListEndpoint,
        addOrRemoveMusicEndpoint: addAndRemoveTrackEndpoint,
        getTracksListEndpoint: accessTrackListEndpoint,
        getAllPlaylistsEndpoint: getAllPlaylistsEndpoint
    }
}()