const prompt = require("prompt-sync")({sigint: true});

const promise = new Promise((resolve, reject) => {
    let numero = parseInt(prompt("Digite um número:"));
    
    if (numero % 2 === 0) {
        resolve(`O número digitado foi ${numero} número validado é par`);
    } else {
        reject(`Error: número ${numero} informado é impar`);
    }
});

promise
.then((mensagem) => {
    console.log(mensagem);
})

.catch((error) => {
    console.log(error);
})