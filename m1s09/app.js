//npm init -y

//npm install express

const express = require("express");

const app = express();

app.use(express.json());

const logHoraMiddleware = (req, res, next) => {
  const horaAtual = new Date().toISOString();
  console.log(
    `[${horaAtual}] Nova solicitação recebida: ${req.method} ${req.originalUrl}`
  );
  next();
};

app.use(logHoraMiddleware);

app.get("/", logHoraMiddleware, function (req, res) {
  res.send("Servidor Online!!!");
});

app.get("/sobre", logHoraMiddleware, function (req, res) {
  res.send("Essa é minha primeira aplicação de servidores!");
});

app.get("/contato", logHoraMiddleware, function (req, res) {
  res.send("Essa é o nosso contato!");
});

app.get("/produto/:id", function (req, res) {
  const { id } = req.params;
  res.status(200).send(`Produto com id: ${id}`);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
