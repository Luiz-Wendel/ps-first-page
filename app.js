const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from my project!')
})

app.listen(3002, () => {
  console.log('Listening on port 3002...')
})
