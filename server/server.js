const express = require('express')
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./sockets.js');
const server = require('./listen.js');

//define port used for server
const PORT = 3000;

//apply express middleware
app.use(cors());

sockets.connect(io, PORT)

server.listen(http,PORT);