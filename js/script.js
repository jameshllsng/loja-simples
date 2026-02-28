const addCarrinho = document.querySelectorAll(".adicionar-carrinho");
const contCarrinho = document.getElementById("carrinho-count");

let qtdCarrinho = 0;

function atualizarCarrinho() {
  qtdCarrinho++;
  contCarrinho.textContent = qtdCarrinho;
}

addCarrinho.forEach(function (button) {
  button.addEventListener("click", atualizarCarrinho);
});
