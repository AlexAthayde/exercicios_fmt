let calcMedia = (notas) => {
  // Soma todos os valores do array
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  // Divide a soma pela quantidade de posições do array para calcular a média
  let media = soma / notas.length;
  // Retorna a média
  return media;
};

// Exemplo de uso
let notas = [];
// Recebe valores inseridos pelo usuário sendo no máximo 4 notas 
for (let i = 1; i <= 4; i++) {
  let nota = parseInt(prompt(`Digite a nota ${i}: `));
  notas.push(nota);
}

let media = calcMedia(notas);

console.log(`A média dos números é: ${media}`); // Saída: A média dos números é: valor calculado
alert(`A média dos números é: ${media}`);