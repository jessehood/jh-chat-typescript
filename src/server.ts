import { Application, Request, Response, NextFunction } from 'express';
import * as express from 'express';
import Messages from './models/Messages';
import Users from './models/Users';
const app: Application = express();
const ioHttp = require('http').Server(app);
const io = require('socket.io')(ioHttp);

const messagesLocal = new Messages();
const usersLocal = new Users();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.get('/api/messages', (req: Request, res: Response) => {
  res.send(messagesLocal.messages);
});

app.get('/api/users', (req: Request, res: Response) => {
  res.send(usersLocal.users);
});

app.post('/api/users/new-user', (req: Request, res: Response) => {
  const user = req.body;
  usersLocal.addUser(user);
});

io.on('connection', (socket: any) => {
  socket.emit('connected-client', 'connected');
  socket.emit('get-messages', messagesLocal.messages);

  socket.on('disconnect', (client: any) => {
    console.log ('Client disconnected');
  });

  socket.on('message-server', (data: string) => {
    const message = { text: data };
    messagesLocal.addMessage(message);
    socket.broadcast.emit('new-message', message);
    console.log('current messages:');
    console.log(messagesLocal);
  });
});

io.listen(5000);
app.listen(4000, () => console.log('Example app listening on port 4000!'));