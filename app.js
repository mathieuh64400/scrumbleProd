const express = require('express')
const app = express()
const port = process.env.PORT || 3333

require('./config/config');
require('./models/db');

app.get('/', (req, res) => {
  res.send('Hello World! mon gars')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})