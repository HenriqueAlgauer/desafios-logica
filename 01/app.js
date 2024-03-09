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
    //const divSorteados = 

    for (let i = 0; i < numeros; i++) {
        let aleatorio = Math.floor(Math.random() * (max - min+1) + min);
        console.log(aleatorio);
        sorteados.push(aleatorio)
    }
    console.log(sorteados);

    document.getElementById("sorteados").innerHTML = `<p> ${sorteados} </p>`

})

restart.addEventListener("click", ()=>{

    console.log('foi');
    qntnumeros.value = ''
    numFim.value = ''
    numInicio.value = ''
})

// let menor = 40
// let maior = 10
// for(let i=0; i<5;i++){
//     let x = Math.round(Math.random() * (maior-menor)+menor);
//     console.log('X = '+x);
// }