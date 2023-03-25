const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const helmet = require('helmet')

const { router } = require('./routes/list.routes')

app.use(helmet())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/api/list", router)

app.listen(3000, () => console.log('server listen on 3000'))