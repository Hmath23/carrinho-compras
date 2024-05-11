let valorTotal = 0;
limpar();

function adicionar() {
    //recuperando valores do HTML
    let qtde = parseInt(document.getElementById('quantidade').value);
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - ')[0];
    let valorProduto = produto.split('R$')[1];
    //Validando se a adição ao carrinho pode prosseguir
    if (!qtde || qtde === 0) {
        alert('Coloque uma quantidade válida!');
        return;
    }
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    //Calculo dos valores subtotal e total
    let subTotal = qtde * valorProduto;
    valorTotal += subTotal;
    //Exibição no html dos produtos adicionados no carrinho
    document.getElementById('lista-produtos').innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtde}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
  </section>`
    document.getElementById('valor-total').textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    document.getElementById('valor-total').textContent = 'R$ -';
    document.getElementById('lista-produtos').textContent = '';
}