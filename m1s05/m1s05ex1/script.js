// resolução simples
// array de frutas
// const frutas = ["Abacate", "Banana", "Maça"];
// exibe a fruta do array na posição 02
// console.log(frutas[1]);


// resolução usando o prompt-sync
const prompt = require("prompt-sync")();


const frutas = [];

for(let i = 0; i < 3; i++){
  frutas.push(prompt("Digite o nome da fruta: "))
}
console.log(frutas[1]);