import { Application, Request, Response, NextFunction } from 'express';
const express = require('express');
const app: Application = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

interface Message {
  text: string;
}

const messages: Message[] = [];

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.get('/api/messages', (req: Request, res: Response) => {
  res.send(messages);
});

io.on('connection', (socket: any) => {
  socket.emit('connected-client', 'connected');
  socket.emit('get-messages', messages);

  socket.on('disconnect', (client: any) => {
    console.log ('Client disconnected');
  });

  socket.on('message-server', (data: string) => {
    const message = { text: data };
    messages.push(message);
    socket.broadcast.emit('new-message', message);
    console.log('current messages:');
    console.log(messages);
  });
});

io.listen(5000);
app.listen(4000, () => console.log('Example app listening on port 4000!'));