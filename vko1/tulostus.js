const tulostaTahtia = (n) => {
    let tahdet = ''
    let i = 0
    while (i < n) {
        tahdet = tahdet.concat('* ')
        i++
    }
    console.log(tahdet)
} 
const tulostaTulos = (s) => {
    let string = s.toString()
    let viivat = ''
    let i = 0
    while (i < string.length ) {
        viivat = viivat.concat('-')
        i++
    }
    console.log(viivat)
    console.log(string)
    console.log(viivat)
}

module.exports = {
    tulostaTahtia,
    tulostaTulos
}