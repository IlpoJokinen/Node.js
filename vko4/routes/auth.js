const express = require('express')
const router = express.Router()
const tokens = require('../tokens')

router.post('/auth', (req, res) => {
    if(req.body.username !== 'mark' && req.body.password !== 'giraffe') {
        console.log('Invalid credentials!')
    } else {
        tokens.create(req.body)
    }
})

module.exports = router