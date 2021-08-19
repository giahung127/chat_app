export default class MessageData{
    content = ''
    username = ''
    date = ''
    time = ''

    constructor(content, username, date, time){
        this.content = content
        this.userName = username
        this.date = date
        this.time = time
    }
}