module.exports = function(request) {

    function createPlaylist(playlist) {
        return new Promise(function(resolve) {
            resolve({
            "id": "wmqoUGoBA5J2LE2CwWtw",
            "name": playlist.name,
            "description": playlist.description,
            "tracks": []
        })})
    }

    function deletePlaylist() {
        return new Promise(function(resolve) {
            resolve({
            "tracks": []
        })})
    }

    function updatePlaylist(playlist) {
        return new Promise(function(resolve) {
            resolve({
            "id": playlist.id,
            "name": playlist.name,
            "description": playlist.description,
            "tracks": []
        })})
    }

    function getPlaylists() {
        return new Promise(function(resolve) {
            resolve([
            {
                "id": "dxcsLWoBkLjY0VBYeo0A",
                "name": "PlaylistTesting1",
                "description": "Testing playlist creation",
                "tracks": []
            },
            {
                "id": "LQnmR2oBhOAy8TrbWWUH",
                "name": "PlaylistTesting1",
                "description": "Testing playlist creation",
                "tracks": []
            }])})
    }

    function getPlaylistInfo() {
        return new Promise(function(resolve) {
            resolve({
            "id": "dhcqLWoBkLjY0VBYGI1w",
            "name": "Testing Something",
            "description": "Testing Something Description",
            "tracks": [
                {
                    "name": "Swagger Jagger (Hygrade Radio Mix)",
                    "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Hygrade+Radio+Mix)",
                    "duration": "212",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    }
                },
                {
                    "name": "Swagger Jagger (Wideboys Radio Edit)",
                    "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Wideboys+Radio+Edit)",
                    "duration": "184",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    }
                }
            ],
            "totalDuration": 396
        })})
    }

    function addMusic(playlist) {
        return new Promise(function(resolve) {
            resolve(playlist.tracks)})
    }

    function deleteMusic(playlist) {
        return new Promise(function(resolve) {
            resolve(playlist.tracks)})
    }

    return {
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        updatePlaylist: updatePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusic,
        removeMusicFromPlaylist: deleteMusic
    }
}()