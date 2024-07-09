// import express
const express = require('express')
const app = express()
// set port to 3000
const port = 3000

//for static files
app.use(express.static("public"));

// test / endpoint
app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})