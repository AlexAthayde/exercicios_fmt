let produtos = ["Hortifruti", "Laticínios", "Carnes", "Peixes", "Aves"];
let quantidades = [0, 0, 0, 0, 0];
let maiorQP = 0;
let index = 0;

while (true) {
  let produto = parseInt(prompt(`Qual produto você deseja comprar?
  (1) Hortifruti
  (2) Laticínios
  (3) Carnes
  (4) Peixes
  (5) Aves
  (6) Fechar pedido
`));

  if (produto < 1 || produto > 6) {
    alert("Opção inválida! Digite um número entre 1 e 6.");
  }

  if (produto === 6) {
    break;
  }

  let quantidade = parseInt(prompt(`Qual a quantidade do produto?`));

  if (quantidade <= 0) {
    alert("Quantidade inválida! Digite um número maior que 0.");
  }

  quantidades[produto - 1] += quantidade;
}

for (let i = 0; i < quantidades.length; i++) {
  if (quantidades[i] > maiorQP) {
    maiorQP = quantidades[i];
    index = i;
  }
}

alert(`Seu produto pedido com maior quantidade foi de ${produtos[index]} com ${maiorQP} itens.`);
