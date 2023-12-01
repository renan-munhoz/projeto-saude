

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Dados de exemplo
let users = [
  { id: 1, name: 'Luis Felipe Zuin', position: 'Desenvolvedor Flutter', role: 'Frontend' },
  { id: 2, name: 'Thiago', position: 'Designer', role: 'Frontend' },
  { id: 3, name: 'Samuel', position: 'Programador', role: 'Backend' },
];

// Rotas
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
