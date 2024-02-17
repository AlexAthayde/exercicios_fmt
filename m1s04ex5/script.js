let resposta;
let totalRuins = 0;
let contador = 1;

while (contador <= 4) {
  resposta = parseInt(prompt(`Qual sua avaliação para a série Stranger Fings: 
  (1) Excelente
  (2) Bom ou 
  (3) Ruim`));

  if (resposta == 3) {
    totalRuins++;
  }

  contador++;
}

alert(`Total de usuários que avaliou a série como ruim: ${totalRuins} usuáruios.`);