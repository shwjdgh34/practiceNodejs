/////////////// result 1
// const fs = require('fs');

// setTimeout(() => {
//   console.log('Expired timer callbacks');
// }, 0);
// setImmediate(() => {
//   console.log('setImediate callbacks');
// });
// fs.readFile('./test.txt', () => {
//   console.log('I/O polling and callbacks');
// });
// console.log('top-level code');

//////////////////result 2
const fs = require('fs');

setTimeout(() => {
  console.log('Expired timer callbacks');
}, 0);
setImmediate(() => {
  console.log('setImediate callbacks');
});
fs.readFile('./test.txt', () => {
  console.log('I/O polling and callbacks');
});
console.log('top-level code');
