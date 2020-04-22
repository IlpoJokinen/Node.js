const validateQuery = (req, res, next) => {
    if (req.params.action === 'today' || req.params.action === 'tomorrow') {
        res.status(200).send('Request completed!')
    } else {
        res.status(400).send({
            error: 'Parameter should be today or tomorrow!'
        })
    }
    next()
}
module.exports = {
    validateQuery
}