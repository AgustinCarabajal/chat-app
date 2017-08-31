const app = require('express')()
const http = require('http').Server(app)

const io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    console.log('User Connected')
    socket.on('disconnect', function () {
        console.log('User Disconnected')
    })
    socket.on('chat message', function (message) {
        console.log('message: ', message)
        io.emit('show message', message)
    })
})

http.listen(3000, function () {
    console.log('------------------------\n')
    console.log('App  : Chat Test')
    console.log('Port : 3000')
    console.log('Env  : Development')
    console.log('\n------------------------\n')
})