const prompt = require("prompt-sync")({sigint: true});

const numeros = [];
// array de números
for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1}° número: `));
  numeros.push(numero);
}
// iteração para exibir os números
for(let i = 0; i < 5; i++){
  console.log(`O ${i + 1}° número é ${numeros[i]}`);
}

const soma = numeros.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual;
}, 0);

console.log("A soma total dos números é", soma);

const numerosOrdenados = [...numeros];

numerosOrdenados.sort((a, b) => a - b);

console.log(`Números somados: ${numerosOrdenados.join(" - ")}.`);

const pares = numeros.filter(numero => numero % 2 === 0);

console.log(`Números pares: ${pares.join(" - ")}.`);

const quadrados = numeros.map(numeroQ => numeroQ ** 2 );

console.log(`Números ao quadrado: ${quadrados.join(" - ")}.`)