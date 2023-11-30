

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: prontuario(),
    );
  }
}

class prontuario extends StatefulWidget {
  @override
  _MedicalRecordScreenState createState() => _MedicalRecordScreenState();
}

class _MedicalRecordScreenState extends State<prontuario> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _dobController = TextEditingController();
  final TextEditingController _diagnosisController = TextEditingController();
  final TextEditingController _medicationsController = TextEditingController();

  void _submitForm() {
    // Aqui você pode processar e salvar as informações do prontuário médico
    String name = _nameController.text;
    String dob = _dobController.text;
    String diagnosis = _diagnosisController.text;
    String medications = _medicationsController.text;

    // Aqui você pode fazer algo com as informações, como enviá-las para um servidor, etc.

    // Exibindo um diálogo simples após o envio do formulário
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Prontuário Médico Enviado'),
          content: Text('Nome: $name\nData de Nascimento: $dob\nDiagnóstico: $diagnosis\nMedicações: $medications'),
          actions: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Fechar'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Prontuário Médico'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextFormField(
                controller: _nameController,
                decoration: InputDecoration(labelText: 'Nome do Paciente'),
              ),
              TextFormField(
                controller: _dobController,
                decoration: InputDecoration(labelText: 'Data de Nascimento'),
              ),
              TextFormField(
                controller: _diagnosisController,
                decoration: InputDecoration(labelText: 'Diagnóstico'),
              ),
              TextFormField(
                controller: _medicationsController,
                decoration: InputDecoration(labelText: 'Medicações'),
              ),
              SizedBox(height: 16.0),
              ElevatedButton(
                onPressed: _submitForm,
                child: Text('Enviar Prontuário'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
