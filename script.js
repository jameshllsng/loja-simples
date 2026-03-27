const addCarrinho = document.querySelectorAll(".adicionar-carrinho");
const contCarrinho = document.getElementById("carrinho-count");

// let qtdCarrinho = 0;
let produtosCarrinho = [];

function atualizarCarrinho(event) {
  let produto = event.target.closest(".item-produto");
  let item = {
    id: produto.dataset.id,
    name: produto.dataset.name,
  };
  produtosCarrinho.push(item);

  contCarrinho.textContent = produtosCarrinho.length;
  console.log(produtosCarrinho);
}

addCarrinho.forEach(function (button) {
  button.addEventListener("click", atualizarCarrinho);
});
