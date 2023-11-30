

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: receita(),
    );
  }
}

class receita extends StatefulWidget {
  @override
  receitaState createState() => receitaState();
}

class receitaState extends State<receita> {
  final TextEditingController _medicationController = TextEditingController();
  List<String> _prescriptionList = [];

  void _addMedication() {
    String medication = _medicationController.text;
    if (medication.isNotEmpty) {
      setState(() {
        _prescriptionList.add(medication);
        _medicationController.clear();
      });
    }
  }

  void _submitPrescription() {
    // Aqui você pode processar e salvar a receita médica
    // Pode enviar a lista `_prescriptionList` para um servidor ou realizar outras ações necessárias.
    
    // Exibindo um diálogo simples após o envio da receita
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Receita Médica Enviada'),
          content: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: _prescriptionList
                .map((medication) => Text(medication))
                .toList(),
          ),
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
        title: Text('Receita Médica'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            TextFormField(
              controller: _medicationController,
              decoration: InputDecoration(labelText: 'Medicamento'),
            ),
            SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: _addMedication,
              child: Text('Adicionar Medicamento'),
            ),
            SizedBox(height: 16.0),
            Text(
              'Receita Médica:',
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: _prescriptionList.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(_prescriptionList[index]),
                  );
                },
              ),
            ),
            SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: _submitPrescription,
              child: Text('Enviar Receita'),
            ),
          ],
        ),
      ),
    );
  }
}
