var app = require('express')();
var port =  8080;

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log('connected')
    socket.emit('connected', { 'sessionID': socket.id })
    socket.on('room', function (data) {
        socket.userId = data.userId;
        socket.username = data.username;
        socket.roomId = data.roomId;
        console.log(data.username, data.roomId)
        socket.join(data.room);
        socket.emit('joined', {'room': data.roomId, 'user': data.userId})
        socket.broadcast.to(data.roomId).emit('online', data)
    })

    socket.on('message',function (data) {
        console.log('message send:', data)
        const roomId = data.roomId;
        data.userId = socket.userId ? socket.userId : data.userId;
        data.username = socket.username ? socket.username : data.username;
        data.time = new Date().getTime();
        socket.broadcast.to(roomId).emit('message', data)
    })

    socket.on('disconnect', function (data){
        console.log('disconnect', data)
        socket.roomId && socket.broadcast.to(socket.roomId).emit('offline', {user:socket.userId})
    })
})

server.listen(port, ()=>{

    console.log('Node app is running on port', port)
});