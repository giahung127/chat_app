import { makeAutoObservable } from "mobx";

class MessageData {
    listMessage = []

    constructor(){
        makeAutoObservable(this);
    }

    getMessageList(roomId){
        let roomMessages = 0
        this.listMessage.forEach(room => {
            if (room.roomId == roomId) {
                roomMessages = room
            }
        });
        return roomMessages
    }

    saveMessage(roomMessages, roomId){
        this.listMessage.forEach(room => {
            if (room.roomId == roomId) {
                room.messagesList = roomMessages
            }
        });
    }

    addNewMessageList(NewMessage){
        this.listMessage.push(NewMessage)
    }
}

export default new MessageData();