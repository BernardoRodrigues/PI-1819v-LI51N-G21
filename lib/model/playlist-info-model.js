const PlaylistModel = require( "./playlist-model");

module.exports = class PlaylistInfoModel extends PlaylistModel {

    constructor(id, name, description, totalDuration, tracks) {
        super(id, name, description, tracks)
        this.totalDuration = totalDuration
    }

    static init(id, name, description, totalDuration, tracks) {
        return new PlaylistModel(id, name, description, totalDuration, tracks)
    }

}