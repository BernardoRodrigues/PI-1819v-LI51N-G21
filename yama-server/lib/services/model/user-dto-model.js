module.exports = class UserDtoModel {

    constructor(username, password, playlistsListId) {
        this.username = username;
        this.password = password;
        this.playlistsId = playlistsListId;
    }

    static init(username, password, playlistsListId) {
        return new UserDtoModel(username, password, playlistsListId)
    }

}