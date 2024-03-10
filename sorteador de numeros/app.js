//criar um array vazio, popular ele com o menor numero até o maior numero
//gerar um numero aleatório que será o index do array
// -> importar função Math.random

const sort = document.getElementById("btn-sortear")
const restart = document.getElementById("btn-reiniciar")

let qntnumeros = document.getElementById("quantidade")
let numInicio = document.getElementById("de")
let numFim = document.getElementById("ate")
let sorteados = []

sort.addEventListener("click", () => {
    const numeros = parseInt(qntnumeros.value)
    const min = parseInt(numInicio.value)
    const max = parseInt(numFim.value)

    for (let i = 0; i < numeros;i++){
        let aleatorio = Math.floor(Math.random() * (max - min+1) + min);
        while(sorteados.includes(aleatorio)){
            aleatorio = Math.floor(Math.random() * (max - min+1) + min);
        }
        sorteados.push(aleatorio)
    }

    document.getElementById("sorteados").innerHTML = 
    `<h2> Números sorteados: </h2>
    <p> ${sorteados.sort()} </p>`

})

restart.addEventListener("click", ()=>{
    qntnumeros.value = ''
    numFim.value = ''
    numInicio.value = ''
})
