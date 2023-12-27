let nome = 'Joana'
let experiencia = 950


if (experiencia <= 1000) {
    console.log('Ferro')
} else if (experiencia > 1000 && experiencia <= 2000) {
    console.log('Bronze')
} else if (experiencia > 2000 && experiencia <= 5000) {
    console.log('Prata')
} else if (experiencia > 5000 && experiencia <= 7000) {
    console.log('Ouro')
} else if (experiencia > 7000 && experiencia <= 8000) {
    console.log('Platina')
} else if (experiencia > 8000 && experiencia <= 9000) {
    console.log('Ascendente') 
} else if (experiencia > 9000 && experiencia <= 10000) {
    console.log('Imortal')
} else {
    console.log('Radiante')
}

console.log(`O herói ${nome} está no nível ${experiencia}`)

