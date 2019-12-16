const crypto = require('crypto');
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
  console.log(Date.now() - start, 'Password encrypted')
);
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
  console.log(Date.now() - start, 'Password encrypted')
);
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
  console.log(Date.now() - start, 'Password encrypted')
);
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
  console.log(Date.now() - start, 'Password encrypted')
);
