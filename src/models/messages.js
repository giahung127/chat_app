export default class Message {
    roomId = '';
    messagesList = [];

    constructor(roomId, messagesList){
        this.roomId = roomId
        this.messagesList = messagesList
    }
}


