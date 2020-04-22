const express = require('express')
const router = express.Router()
const db = require('../db')
const tokens = require('../tokens')

router.get('/pois', (req, res) =>  res.send(db.getPoi()))

router.get('/pois/:id', (req, res) => {
    const id = req.params.id
    res.send(db.getPoi(id))
})

router.post('/pois', (req, res) => {
    const id = req.body.id
    const split = req.headers.authorization.split(' ')
    if(!tokens.verify(split[1])) {
        res.send(res.status(401))
    } else {
        db.setPoi(id, req.body)
    }
})

router.put('/pois/:id', (req, res) => {
    const id = req.body.id
    const split = req.headers.authorization.split(' ')
    if(!tokens.verify(split[1])) {
        res.send(res.status(401))
    } else {
        db.setPoi(id, req.body)
    }
})

router.delete('/pois/:id', (req, res) => {
    const id = req.body.id
    const split = req.headers.authorization.split(' ')
    if(!tokens.verify(split[1])) {
        res.send(res.status(401))
    } else {
        db.deletePoi(id)
    }
})
module.exports = router