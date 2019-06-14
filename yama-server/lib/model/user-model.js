module.exports = class UserModel {

    constructor(username, password, playlistsListId, id) {
        this.username = username;
        this.password = password;
        this.playlistsListId = playlistsListId;
        this.id = id
    }

    static init(username, password, playlistsListId, id) {
        return new UserModel(username, password, playlistsListId, id)
    }

}