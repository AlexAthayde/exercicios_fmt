//npm init -y

//npm install express

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Online!!!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});