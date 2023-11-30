

import 'package:flutter/material.dart';


class Tabelahorario extends StatefulWidget{

@override
  TabelaHState createState() => TabelaHState();

}

class TabelaHState extends State<Tabelahorario>{

@override

 Widget build (BuildContext context) => Scaffold(

   appBar: AppBar(
    title: Text("Tabela de Horários"),
   ),
    body:Center(
     child:Table(
      border: TableBorder.all(),
      columnWidths: {
        0:FractionColumnWidth(0.5),
        1:FractionColumnWidth(0.25),
        2:FractionColumnWidth(0.25),
      },
      children:[
        buildRow(['Data','Hora','Médico'],isHeader:true),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
        buildRow(['1','2','3']),
      ]
     ),
    )
  );

  TableRow buildRow(List<String> cells,{bool isHeader = false})=> TableRow(
    children: cells.map((cell){

     final style = TextStyle(
      fontWeight: isHeader? FontWeight.bold : FontWeight.normal,
      fontSize:18,
     );

      return Padding(
        padding: const EdgeInsets.all(12),
        child: Center(child:Text(cell,style:style)),
      );
    }).toList(),
  );
}
