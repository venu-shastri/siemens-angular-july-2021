
const todo: Readonly<string> = "hello";


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.get('/index.html', (req:any, res:any) => {
    res.send('Hello World! from index.html')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})