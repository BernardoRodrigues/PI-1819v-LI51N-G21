module.exports = class UserModel {

    constructor(username, password, playlistsListId) {
        this.username = username;
        this.password = password;
        this.playlistsListId = playlistsListId;
    }

    static init(username, password, playlistsListId) {
        return new UserModel(username, password, playlistsListId)
    }

}