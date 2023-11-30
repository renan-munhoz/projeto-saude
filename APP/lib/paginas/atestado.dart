
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: PdfGeneratorScreen(),
    );
  }
}

class PdfGeneratorScreen extends StatelessWidget {
  final pdf = pw.Document();

  void generatePdf() {
    pdf.addPage(
      pw.Page(
        build: (context) {
          return pw.Center(
            child: pw.Text("Atestado Médico\n\nEste é um atestado gerado em PDF."),
          );
        },
      ),
    );
  }

  Future<void> savePdf() async {
    final Uint8List bytes = pdf.save();
    // Pode ajustar o nome do arquivo conforme necessário
    final String dir = (await getApplicationDocumentsDirectory()).path;
    final String path = '$dir/atestado_medico.pdf';
    final File file = File(path);

    await file.writeAsBytes(bytes);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Gerador de Atestado'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                generatePdf();
                savePdf();
              },
              child: Text('Gerar Atestado'),
            ),
          ],
        ),
      ),
    );
  }
}
