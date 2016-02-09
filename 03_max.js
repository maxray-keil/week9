var net = require('net');
var server = net.createServer(respond);
function respond(socket){
	d = new Date();
	socket.end(d.toString());
}
var port = process.argv[2];
console.log ("Listening on port", port);
server.listen(port)
