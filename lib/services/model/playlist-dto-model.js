'use strict'
class PlaylistDtoModel {

    constructor(id, name, description, tracks) {
        this.id = id
        this.name = name
        this.description = description
        this.tracks = tracks
    }

    static init(id, name, description, tracks) {
        return new PlaylistDtoModel(id, name, description, tracks)
    }

}
module.exports = PlaylistDtoModel