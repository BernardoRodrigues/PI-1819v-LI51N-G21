'use strict'
import PlaylistDtoModel from "./playlist-dto-model";

class PlaylistInfoDtoModel extends PlaylistDtoModel {

    constructor(id, name, description, totalDuration, tracks) {
        super(id, name, description, tracks)
        this.totalDuration = totalDuration
    }

    static init(id, name, description, totalDuration, tracks) {
        return new PlaylistDtoModel(id, name, description, totalDuration, tracks)
    }

}
module.exports = PlaylistDtoModel