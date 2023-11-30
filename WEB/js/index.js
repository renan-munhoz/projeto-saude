const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const banco = require("./banco");
const secao = require("./secao");


const app = express();
app.use(express.static(path.join(__dirname, '../../', 'WEB')));
app.use(express.json());
app.use(secao);
app.use(bodyParser.urlencoded({extended:true}));

const PacienteController = require('./controller/cadastroPaciente_controller.js');
const FuncionarioController = require('./controller/cadastroFuncionario_controller.js');
const ProntuarioController = require('./controller/prontuario_controller.js');
const AgendamentoController = require('./controller/agendamento_controller.js');
const AtestadoController = require('./controller/atestado_controller.js');
const ReceitaController = require('./controller/receita_controller.js');
const LoginPacienteController = require('./controller/loginPaciente_controller.js');
const LoginFuncionarioController = require('./controller/loginFuncionario_controller.js');
const IndexController = require('./controller/index_controller.js');
const HistoricoController = require('./controller/historico_controller.js');
const HorarioController = require('./controller/horario_controller.js');
const MenuFuncionarioController = require('./controller/menuFuncionario_controller.js');
const SobreNosController = require('./controller/sobre-nos_controller.js');
const IndexLogadoController = require('./controller/index-logado_controller.js');

app.set('views', path.join(__dirname,'../../','WEB'));
app.set('view engine', 'ejs');

app.use(PacienteController);
app.use(FuncionarioController);
app.use(ProntuarioController);
app.use(AgendamentoController);
app.use(AtestadoController);
app.use(ReceitaController);
app.use(LoginPacienteController);
app.use(LoginFuncionarioController);
app.use(IndexController);
app.use(HistoricoController);
app.use(HorarioController);
app.use(MenuFuncionarioController);
app.use(SobreNosController);
app.use(IndexLogadoController);

//app.use(router);

app.listen(3030, () => {
    console.log("Servidor rodando")
});
 