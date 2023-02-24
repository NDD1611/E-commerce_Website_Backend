const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors')
const fs = require('fs');
const bodyParser = require('body-parser')

const initWebRoutes = require('./route/routes.js')

app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


initWebRoutes(app)

app.get("/getAllImage", (req, res) => {
    const path = './public/image/';
    let fileImages = fs.readdirSync(path).map((file) => {
        return "/public/image/" + file
    })

    res.json(fileImages)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})