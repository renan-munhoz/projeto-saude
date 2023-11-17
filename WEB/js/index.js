const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const banco = require("./banco")

const app = express();

const PacienteController = require('./controller/cadastroPaciente_controller.js');
const FuncionarioController = require('./controller/cadastroFuncionario_controller.js');
const ProntuarioController = require('./controller/prontuario_controller.js');
/*const AgendamentoController = require('./controller/agendamento_controller.js');*/

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(PacienteController);

app.use(FuncionarioController);

app.use(ProntuarioController);

//app.use(AgendamentoController);

app.use(router);

app.listen(3030, () => {
    console.log("Servidor rodando")
});
