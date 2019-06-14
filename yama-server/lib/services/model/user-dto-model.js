module.exports = class UserDtoModel {

    constructor(username, password, playlistsListId, userId) {
        this.username = username;
        this.password = password;
        this.playlistId = playlistsListId;
        this.id = userId
    }

    static init(username, password, playlistsListId, userId) {
        return new UserDtoModel(username, password, playlistsListId, userId)
    }

}