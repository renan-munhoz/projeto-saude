
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sobre Nós',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const AboutUsScreen(),
    );
  }
}

class AboutUsScreen extends StatelessWidget {
  const AboutUsScreen();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sobre Nós'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            PersonInfo(
              name: 'Renan Coelho Munhoz',
              position: 'Estudante',
              role: 'Programador do projeto web.',
            ),
            PersonInfo(
              name: 'Luis Felipe Zuin Zatoni',
              position: 'Estudante',
              role: 'Programador do projeto mobile',
            ),
            PersonInfo(
              name: 'Nicolas Cesar de Oliveira',
              position: 'Estudante',
              role: 'Auxiliar e designer dos projetos.',
            ),
          ],
        ),
      ),
    );
  }
}

class PersonInfo extends StatelessWidget {
  final String name;
  final String position;
  final String role;

  const PersonInfo({
    required this.name,
    required this.position,
    required this.role,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 20),
      padding: const EdgeInsets.all(15),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.blue, width: 1),
        borderRadius: BorderRadius.circular(15),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Nome: $name',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 8),
          Text(
            'Cargo: $position',
            style: TextStyle(fontSize: 16),
          ),
          SizedBox(height: 8),
          Text(
            'Função no Projeto: $role',
            style: TextStyle(fontSize: 16),
          ),
        ],
      ),
    );
  }
}
