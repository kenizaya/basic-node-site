const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'contact-me.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '404.html'))
})

app.listen(port, () => {
  console.log('listening at 3000')
})
