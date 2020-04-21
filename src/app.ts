import 'reflect-metadata';
import express = require('express');
import { setupSocket } from './util/socketio';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import ormconfig from './config/orm';
import { registerRoutes } from './util/routes';

createConnection(ormconfig).then(async connection => {
  const app = express();
  const port = process.env.PORT;
  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  console.log('connected to typeorm...');

  app.set('port', port);

  app.use(function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  registerRoutes(app);
  setupSocket(io);

  server.listen(port, function() {
    console.log('philly started! listening on *:' + port);
  });
}).catch(error => console.log('typeorm connection error: ', error));
