var express = require("express")
  , io = require("socket.io");

var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

var port = process.env.PORT || 8005;

app.use(express.logger({format:"dev"}));
app.use(express.static('public'));

server.listen(port);

console.log("Now listening on " + port);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});