var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('user connected', function(nick) {
        const msg = 'User connected, welcome ' + nick;
        io.emit('user connected', msg);
    })

    socket.on('disconnect', function() {
        io.emit('user disconnected');
    });

    socket.on('chat message', function(data) {
        const msg = `${data.nick} diz: ${data.msg}`;
        io.emit('chat message', msg);
    })
});

http.listen(3000, function() {
    console.log('Listening on *3000')
});
