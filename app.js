const
  path = require('path'),
  express = require('express'),
  app = new express()

app
  .use(express.static(path.join(__dirname,'build')))
  .listen(7000)

console.log('run at http://localhost:7000')