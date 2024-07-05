// import express
const express = require('express')
const app = express()
// set port to 3000
const port = 3000

// test / endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})