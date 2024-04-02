//npm init -y

//npm install express

const express = require("express");

const app = express();

const logHoraMiddleware = (req, res, next) => {
  const horaAtual = new Date().toISOString();
  console.log(
    `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
    );
  next(); // Chamar next() para passar a solicitação para o próximo middleware
};

app.get("/", logHoraMiddleware, function (req, res) {
  res.send("Servidor Online!!!");
});

app.get("/sobre", logHoraMiddleware, function (req, res) {
  res.send("Essa é minha primeira aplicação de servidores!");
});

app.get("/contato", logHoraMiddleware, function (req, res) {
  res.send("Essa é o nosso contato!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
