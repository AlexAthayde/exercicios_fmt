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

let produtos = [];

app.get("/", logHoraMiddleware, function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/sobre", logHoraMiddleware, function (req, res) {
  res.send("Essa é minha primeira aplicação de servidores!");
});

app.get("/contato", logHoraMiddleware, function (req, res) {
  res.send("Essa é o nosso contato!");
});

app.get("/produtos/:id", logHoraMiddleware, function (req, res) {
  const { id } = req.params;
  res.status(200).send(`Produto com id: ${id}`);
});

app.post("/produtos", logHoraMiddleware, (req, res) => {
  const produto = req.body;
  produto.id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
  produtos.push(produto);
  res.status(201).send("produto adicionada com sucesso.");
});

app.put("/produtos/:id", logHoraMiddleware, (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const index = produtos.findIndex((produto) => produto.id === parseInt(id));
  if (index === -1) {
    res.status(404).send("produto não encontrada.");
    return;
  }
  produtos[index] = { ...produtos[index], ...newData };
  res.status(200).send("produto atualizada com sucesso.");
});

app.delete("/produtos/:id", logHoraMiddleware, (req, res) => {
  const { id } = req.params;
  const index = produtos.findIndex((produto) => produto.id === parseInt(id));
  if (index === -1) {
    res.status(404).send("produto não encontrada.");
    return;
  }
  produtos.splice(index, 1);
  res.status(200).send("produto deletada com sucesso.");
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
