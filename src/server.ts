import { Application, Request, Response } from 'express';
const express = require('express');
const app: Application = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

interface Message {
  message: string;
}

const messages: Message[] = [];

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

io.on('connection', (socket: any) => {
  socket.emit('connected-client', 'connected');

  socket.on('disconnect', (client: any) => {
    console.log ('Client disconnected');
  });

  socket.on('message-server', (data: string) => {
    const message = { message: data };
    messages.push(message);
    socket.broadcast.emit('message-client', message);
    console.log('current messages:');
    console.log(messages);
  });
});

io.listen(5000);
app.listen(4000, () => console.log('Example app listening on port 4000!'));