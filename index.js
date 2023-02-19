const express = require('express')
const app = express()
require('dotenv').config();

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})