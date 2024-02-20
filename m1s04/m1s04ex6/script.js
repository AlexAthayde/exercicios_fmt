let resultado = "";
let numero = parseInt(prompt("Digite um número para tabuada: "));

for (let i = 0; i <= 10; i++) {
  // Multiplica o número digitado pelo índice atual
  const multiplica = numero * i;

  // Concatena o resultado na variável "resultado" para reservar os valores 
  resultado = resultado + `${numero} x ${i} = ${multiplica}\n`;
}

// Exibe a tabuada completa em um alert.
alert(`Tabuada do número ${numero}: \n` + resultado);