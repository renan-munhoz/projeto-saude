

import 'package:appclinica/paginas/horario.dart';
import 'package:appclinica/paginas/prontuario.dart';
import 'package:appclinica/paginas/receita.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: EmployeeMenuScreen(),
    );
  }
}

class EmployeeMenuScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Menu do Funcionário'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de prontuário médico
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => prontuario()),
                );
              },
              child: Text('Prontuário'),
            ),
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de atestado
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AttestationScreen()),
                );
              },
              child: Text('Atestado'),
            ),
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de receita médica
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => receita()),
                );
              },
              child: Text('Receita'),
            ),
            ElevatedButton(
              onPressed: () {
                // Navegar para a tela de horário
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Tabelahorario()),
                );
              },
              child: Text('Horário'),
            ),
            ElevatedButton(
              onPressed: () {
                // Adicionar lógica para finalizar a sessão (pode ser navegar de volta para a tela de login, por exemplo)
                Navigator.pop(context);
              },
              child: Text('Finalizar Sessão'),
            ),
          ],
        ),
      ),
    );
  }
}

class MedicalRecordScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Prontuário Médico'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Prontuário Médico'),
      ),
    );
  }
}

class AttestationScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Atestado'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Atestado'),
      ),
    );
  }
}

class PrescriptionScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Receita Médica'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Receita Médica'),
      ),
    );
  }
}

class ScheduleScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Horário'),
      ),
      body: Center(
        child: Text('Conteúdo da Tela de Horário'),
      ),
    );
  }
}
