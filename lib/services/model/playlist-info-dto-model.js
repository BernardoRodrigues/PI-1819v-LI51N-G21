import PlaylistDtoModel from "./playlist-dto-model";

export default class PlaylistInfoDtoModel extends PlaylistDtoModel {

    constructor(id, name, description, totalDuration, tracks) {
        super(id, name, description, tracks)
        this.totalDuration = totalDuration
    }

    static init(id, name, description, totalDuration, tracks) {
        return new PlaylistDtoModel(id, name, description, totalDuration, tracks)
    }

}