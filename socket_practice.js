const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


app.use(express.static('js_chrome_spare'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/js_chrome_spare/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
}); 