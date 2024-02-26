const prompt = require("prompt-sync")()

const frutas = []

// array de frutas
for(let i = 0; i < 3; i++){
  frutas.push(prompt("Digite o nome da fruta: "));
}

// adiciona uma nova fruta ao final do array.
frutas.push(prompt("Digite uma fruta adicional: "));

// remova a primeira fruta do array.
frutas.shift();

// exibe o array com as alterações.
console.log(frutas);