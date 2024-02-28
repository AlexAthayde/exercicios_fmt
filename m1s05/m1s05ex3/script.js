// importação da biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Criação do array
const numeros = [];

// Loop for para solicitar, imprimir e somar números
let soma = 0;
for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
  numeros.push(numero);
  soma += numero;
  console.log(`Número ${i + 1}: ${numero}\n`);
}

// Impressão da soma dos números
console.log(`Soma dos números: ${soma}`);
