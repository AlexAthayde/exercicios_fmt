var numero = parseInt(prompt("Digite um número: "));

function ParImpar(numero) {
    if (numero % 2 === 0) {
      return "O número " + numero + " é par.";
    } else {
      return "O número " + numero + " é ímpar.";
    }
}

var resultado = ParImpar(numero);
  
alert(resultado);