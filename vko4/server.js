const express = require('express')
const app = express()
const port = 3000
const poisRouter = require('./routes/pois')
const authRouter = require('./routes/auth')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.json())
app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))

app.use('/api/v1', poisRouter)
app.use('/api/v1', authRouter)