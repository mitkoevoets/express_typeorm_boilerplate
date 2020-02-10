import { Socket } from 'socket.io';

export function setupSocket(io: Socket) {
  io.on('connection', function (socket: any) {
    console.log("a cortex connected");
    io.emit('message', '~polo---established philly connection~');
    io.on('my other event', function (data: any) {
      console.log(data);
    });
  });

}
