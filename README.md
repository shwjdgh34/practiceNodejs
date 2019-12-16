# Practice Nodejs

# TOC

## EventLoop

![eventloop order of phases](./image/eventloop-phases.png)

1. result1

```javascript
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
```

![eventloop-result1](./image/eventloop-result1.png)
