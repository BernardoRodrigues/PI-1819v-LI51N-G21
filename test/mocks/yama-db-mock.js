module.exports = function() {

    

    function createPlaylist(playlist, cb) {
        cb({
            "id": "wmqoUGoBA5J2LE2CwWtw",
            "name": playlist.name,
            "description": playlist.description,
            "tracks": []
        })
    }

    function deletePlaylist(playlist, cb) {
        cb({
            "tracks": []
        })
    }

    function updatePlaylist(playlist, cb) {
        cb({
            "id": playlist.id,
            "name": playlist.name,
            "description": playlist.description,
            "tracks": []
        })
    }

    function getPlaylists(cb) {
        cb([
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
            }])
    }

    function getPlaylistInfo(playlist, cb) {
        cb({
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
        })
    }

    function addMusic(playlist, cb) {
        cb(playlist.tracks)
    }

    function deleteMusic(playlist, cb) {
        cb(playlist.tracks)
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