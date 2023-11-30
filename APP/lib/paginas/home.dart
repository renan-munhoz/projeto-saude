
import 'package:appclinica/paginas/agendamento.dart';
import 'package:appclinica/paginas/historico.dart';
import 'package:appclinica/paginas/loginfuncionario.dart';
import 'package:appclinica/paginas/loginpaciente.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: GeneralMenuScreen(),
    );
  }
}

class GeneralMenuScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Menu Geral'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de agendamento
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Agendamento()),
                );
              },
              child: Text('Agendamento'),
            ),
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de histórico
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Tabelahistorico()),
                );
              },
              child: Text('Histórico'),
            ),
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela Sobre Nós
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AboutUsScreen()),
                );
              },
              child: Text('Sobre Nós'),
            ),
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de login de funcionário
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => loginfuncionario()),
                );
              },
              child: Text('Login de Funcionário'),
            ),
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de login de paciente
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => loginpaciente()),
                );
              },
              child: Text('Login de Paciente'),
            ),
          ],
        ),
      ),
    );
  }
}

class AppointmentScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Agendamento'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Agendamento'),
      ),
    );
  }
}

class HistoryScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Histórico'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Histórico'),
      ),
    );
  }
}

class AboutUsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Sobre Nós'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela Sobre Nós'),
      ),
    );
  }
}

class EmployeeLoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login de Funcionário'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Login de Funcionário'),
      ),
    );
  }
}

class PatientLoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login de Paciente'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Login de Paciente'),
      ),
    );
  }
}
