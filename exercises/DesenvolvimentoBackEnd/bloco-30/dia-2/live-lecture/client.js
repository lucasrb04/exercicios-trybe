const net = require('net');
const client = new net.Socket();
const stdin = process.openStdin();

client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();
    client.write(message);
  });
});

client.on('data', (message) => {
  console.log(message.toString());
});
client.on('close', () => {
  console.log('servidor desconectado');
  client.destroy();
  process.exit(1);
});
