import scheduler = require('node-schedule');
import { Socket } from 'socket.io';

let rule = new scheduler.RecurrenceRule();
rule.second = 3;
//
// function cortexJob(i: number, io: Socket): void{
//   if(i%10 === 3 || i%10 === 6 || i%10 === 9) {
//     let message: string = i%10 === 6 ? 'L' : 'H';
//
//     console.log('The ' + i + ', and everything! ' + message)
//     io.emit('message', message);
//   }
// }

export function runScheduler(io: Socket) {
  // for (let _i = 1; _i <= 59; _i++) {
  //   // Each _i scheduler job
  //   scheduler.scheduleJob(_i + ' * * * * *', () => {cortexJob(_i, io)});
  // }
}