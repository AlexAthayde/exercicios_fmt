// prompt importa a biblioteca prompt-sync
// instalei através do comando "npm install prompt-sync"
const prompt = require('prompt-sync')();

// array de frutas
const frutas = ["Abacate", "Banana", "Maça"];

// exibe a fruta do array na posição 2
console.log(frutas[1]);

// adiciona uma nova fruta ao final do array.
frutas.push("Manga");

// remova a primeira fruta do array.
frutas.shift();

// exibe o array com as alterações.
console.log(frutas); 
