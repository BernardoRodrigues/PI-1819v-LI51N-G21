module.exports = class PlaylistModel {

    constructor(id, name, description, tracks) {
        this.id = id
        this.name = name
        this.description = description
        this.tracks = tracks
    }

    static init(id, name, description, tracks) {
        return new PlaylistModel(id, name, description, tracks)
    }

}