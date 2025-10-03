import * as net from "net";

// Connection
function newConn(socket: net.Socket): void {
    console.log('new connection', socket.remoteAddress, socket.remotePort);
    socket.on('end', () => {
        console.log('EOF.');
    });
    socket.on('data', (data: Buffer) => {
        console.log('data:', data);
        socket.write(data);
        // actively closed the connection if the data contains 'q'
        if (data.includes('q')) {
            console.log('closing.');
            socket.end();   // this will send FIN and close the connection.
        }
    });
  
}

// Listening
let server = net.createServer();
//TCP server instance 생성

server.on('connection', newConn);       // Server on
server.on('error', (err: Error) => {    // Error handling
    throw err;
});

server.listen({ host: '127.0.0.1', port: 12345 }, () => {
    console.log('Server is listening on port 12345');
});         // The server is waiting for client connections on 127.0.0.1:12345


