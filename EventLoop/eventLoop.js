/////////////////////// result1
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

///////////////////// result2
const fs = require('fs');
setTimeout(() => {
  console.log('Expired timer callbacks');
}, 0);
setImmediate(() => {
  console.log('setImediate callbacks');
});
fs.readFile('./test.txt', () => {
  console.log('I/O polling and callbacks 1');
  console.log('------------------');

  setTimeout(() => {
    console.log('setTimeout 1-1');
  }, 0);
  setTimeout(() => {
    console.log('setTimeout 1-2');
  }, 3000);
  setImmediate(() => {
    console.log('setImediate 1');
  });
});

fs.readFile('./test.txt', () => {
  console.log('I/O polling and callbacks 2');
  console.log('------------------');

  setTimeout(() => {
    console.log('setTimeout 2-1');
  }, 0);
  setTimeout(() => {
    console.log('setTimeout 2-2');
  }, 3000);
  setImmediate(() => {
    console.log('setImediate 2');
  });
});
console.log('top-level code');
