function adicao(n1,n2, funcaoAnonima) {
  // Soma da adição 
  let soma = n1 + n2;
  // Fução anônima recebe a soma
  funcaoAnonima(soma);
}
// Variáveis para receber os valores do usuário
var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));

adicao(num1,num2, (resultado)=>{
  console.log(`O resultado da adição é ${resultado}`);
});