//npm init -y

//npm install express

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Online!!!");
});

app.get("/sobre", function (req, res) {
  res.send("Essa é minha primeira aplicação de servidores!");
});

app.get("/contato", function (req, res) {
  res.send("Essa é o nosso contato!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
