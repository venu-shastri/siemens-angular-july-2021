
const todo: Readonly<string> = "hello";

const path=require("path");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.get('/index.html', (req:any, res:any) => {
    res.sendFile(path.join(__dirname,"index.html"));
  })

  app.get('/jsFundmentals.js', (req:any, res:any) => {
    res.sendFile(path.join(__dirname,"jsFundmentals.js"));
  })

  app.get('/closures.js', (req:any, res:any) => {
    res.sendFile(path.join(__dirname,"closures.js"));
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})