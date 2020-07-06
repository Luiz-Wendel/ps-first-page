const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')

const app = express()

// Print requests on terminal
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Hello from my project!')
})

app.listen(3002, () => {
  console.log(`Listening on port ${chalk.green('3002')}...`)
})
