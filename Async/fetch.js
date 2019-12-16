const fetch = require('node-fetch');
fetch('https://dog.ceo/api/breed/a33frican/images/random')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
