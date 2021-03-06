/**
 * Created by User on 6/12/2017.
 */
module.exports = function (server) {
    var io = require('socket.io').listen(server);
    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
        socket.on('chat message', function (msg) {
            io.emit('chat message', msg
                ? {isOn: true, message: "The switch has been turned on"}
                : {isOn: false, message: "The switch has been turned off"});
            console.log('message: ' + msg);
        });
    });
}