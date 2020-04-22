const {tulostaTahtia, tulostaTulos} = require('./tulostus')

const tulostaNelio = (n, tulostaTahtia) => {
    for (let i = 0; i < n; i++) {
        tulostaTahtia(n)
    }
}
const tulostaSuorakulmio = (n1, n2, tulostaTahtia) => {
    for (let i = 0; i < n2; i++) {
        tulostaTahtia(n1)
    }
}
const tulostaKolmio = (n, tulostaTahtia) => {
    for (let i = 0; i < n; i++) {
        tulostaTahtia(i + 1)
    }
}
const lukusarjanSumma = (n) => {
    let luvut = []
    for (let i = 0; i < n; i++) {
        luvut.push(i + 1)
    }
    let sum = luvut.reduce((a, b) => a + b, 0)
    return sum
}

const kertoma = (n) => {
    let vastaus = 1
    for (let i = 2; i <= n; i++) {
        vastaus = vastaus * i
    }
    return vastaus
}

module.exports = {
    tulostaNelio, tulostaKolmio, tulostaSuorakulmio,
    lukusarjanSumma, kertoma
}