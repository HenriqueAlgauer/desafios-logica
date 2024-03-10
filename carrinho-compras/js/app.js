// pegar os elementos:
    // 'botao adicionar'
    // 'select produto'
    // 'input text "qtde."'
    // 'botao limpar'
    // 'div com preço total'
    // 'div com a lista de produtos no carrinho'
// adicionar um event listnner no 'botao adicionar'
    //pegar o valor do elemento 'produto'
    //pegar o valor do elemento 'input qtde.' 
        //pegar o elemento lista e alterar produtos
        //pegar o elemento total e alterar valor

const btnAdd = document.getElementById("adicionar")
const btnReset = document.getElementById("limpar")
let produto = document.getElementById("produto")
let qnt = document.getElementById("quantidade")
let total = document.getElementById('valor-total')
let lista = document.getElementById('lista-produtos')

let valorTotal = 0;

function atualizaLista(qnt, valor, nome){
    if(qnt == null){
        valorTotal = 0;
        lista.innerHTML = ''
        total.innerText = `${valorTotal}`
    }else{
        lista.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${qnt}x</span> ${nome} <span class="texto-azul">R$${valor}</span></section>`
        total.innerText = `R$${valorTotal}`
    }
}

btnAdd.addEventListener('click', ()=>{
    let nomeProduto = produto.value.split('-')[0]
    let valorProduto = produto.value.split('R$')[1]
    let preco = qnt.value * valorProduto
    
    valorTotal += preco
    atualizaLista(qnt.value, nomeProduto, valorProduto)

})

btnReset.addEventListener('click', ()=>{
    atualizaLista(null)
})