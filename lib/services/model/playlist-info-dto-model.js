const PlaylistDtoModel = require('./playlist-dto-model')
module.exports = class PlaylistInfoDtoModel extends PlaylistDtoModel {

    constructor(id, name, description, totalDuration, tracks) {
        super(id, name, description, tracks)
        this.totalDuration = totalDuration
    }

    static init(id, name, description, totalDuration, tracks) {
        return new PlaylistInfoDtoModel(id, name, description, totalDuration, tracks)
    }

}