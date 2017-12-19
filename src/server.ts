// type imports
import { Application, Request, Response, NextFunction } from 'express';
// end type imports

import 'reflect-metadata'; // for typeorm decorators
import * as express from 'express';
import { createConnection, Connection, getMongoManager } from 'typeorm';
import Messages from './models/Messages';
const app: Application = express();
const ioHttp = require('http').Server(app);
const io = require('socket.io')(ioHttp);

(async () => {
  const connection: Connection = await createConnection({
    type: 'mongodb',
    host: 'localhost',
    port: 29000,
    database: 'chat',
    entities: [ Messages ]
  });

  const manager = getMongoManager();

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

  io.on('connection', async (socket: any) => {
    socket.emit('connected-client', 'connected');
    socket.emit('get-messages', await manager.find(Messages));

    socket.on('disconnect', (client: any) => {
      console.log('Client disconnected');
    });

    socket.on('message-server', async (data: string) => {
      const message = new Messages();
      message.text = data;
      socket.broadcast.emit('new-message', message);
      await manager.save(message);
    });
  });
})();


io.listen(5000);
app.listen(4000, () => console.log('Example app listening on port 4000!'));