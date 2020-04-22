const errorHandler = (err, req, res, next) => {
    console.log(err)
    if (!err.statusCode || err.statusCode === 500) {
        res.status(500).send({
        error: 'Something failed!'
    })
    } else {
        res.status(err.statusCode).send({ error: err.message });
    }
}
module.exports = {
    errorHandler
}