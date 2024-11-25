const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => res.send('Hello World!'))
const port = process.env.PORT 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))