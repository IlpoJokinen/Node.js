const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const { validateQuery } = require('./query_validator')
const { errorHandler } = require('./error_handler')
const url = 'https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=0083&language=fi'
const fetch = require('node-fetch')

app.use(morgan('dev'))
app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))

app.get('/menus', (req, res) => {
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => res.send(data))
})
app.use(errorHandler)

app.get('/menus/:action', (req, res, next) => {
    app.use(validateQuery(req, res, next))
})
