export default class User {
    userId = '0';
    username = '';
    roomList = [];

    constructor(userId, username, roomList){
        this.userId = userId
        this.username = username
        this.roomList = roomList
    }
}