const net = require('net');

const port = 2708;

let sockets = [];
let guestId = 0;

function broadcast(from, message) {
  sockets.forEach((socket) => {
    if (socket.name !== from.name) {
      socket.write(`${from.name} > ${message}`);
    }
  });
}
const server = net.createServer((socket) => {
  guestId++;
  socket.name = `Guest ${guestId}`;
  sockets.push(socket);
  socket.on('end', () => {
    sockets = sockets.filter(client => client.name!== socket.name)
    console.log('cliente desconectado');
  });
  socket.on('error', (error) => {
    console.log('Erro no socket: ', error.message);
  });
  socket.on('data', (message) => {
    broadcast(socket, message.toString());
  });
  socket.write('Bem vindo ao Chat \n');
});

server.listen(port, () => console.log(`Servidor está on na porta ${port}`));
