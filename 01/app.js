//criar um array vazio, popular ele com o menor numero até o maior numero
//gerar um numero aleatório que será o index do array
    // -> importar função Math.random

const qntnumeros = document.getElementById("quantidade")
const numInicio = document.getElementById("de")
const numFim = document.getElementById("ate")
const sort = document.getElementById("btn-sortear")
const restart = document.getElementById("btn-reiniciar")

console.log(sort);
console.log(restart);

sort.addEventListener("click", ()=>{
    const qntnum = qntnumeros.value
    const menor = numInicio.value
    const maior = numFim.value

    for(let i=0; i<qntnum;i++){
        let aleatorio = Math.floor(Math.random() * (menor - maior) + menor + maior);
        console.log(aleatorio);
    }
})
