const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded())
app.use(express.static('web-client'))
app.use(express.json())
app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))

app.get('/api/exercise', (req, res) => res.send(req.query))

app.get('/api', (req, res) => res.send({msg: 'Hello World!'}))

app.get('/hello', (req, res) => {
    app.use(express.static('hello'))
    res.redirect('hello.html')
})
app.post('/api/exercise', (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const submit = req.body.submit
    const fruits = req.body.fruit
    const gender = req.body.gender
    if (firstname !== undefined) {
        res.send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Form 1</title><link rel="stylesheet" href="web-client/style.css"></head><body><h1>Hello from Express!</h1><h2>POST parameters</h2><p>I received these parameters: </p><ul><li>firstname: ${firstname}</li><li>lastname: ${lastname}</li><li>submit: ${submit}</li></ul></body></html>`)
    } else {
        res.send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Form 1</title><link rel="stylesheet" href="web-client/style.css"></head><body><h1>Hello from Express!</h1><h2>POST parameters</h2><p>I received these parameters: </p><ul><li>favourite fruits: ${fruits}</li><li>gender: ${gender}</li><li>submit: ${submit}</li></ul></body></html>`)
    }
})

app.post('/api/login', (req, res) => {
    const name = 'mark'
    const password = 'giraffe'
    const userObj = {user: req.body.user}
    if (req.body.user === '' || req.body.pwd === '') {
        res.status(400).end()
    }
    if (req.body.user !== name && req.body.pwd !== password) {
        res.status(403).end()
    }
    if (req.body.user === name && req.body.pwd === password) {
        res.status(200)
        res.send(userObj)
    }
})
