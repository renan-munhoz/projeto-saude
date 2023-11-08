
import 'package:flutter/material.dart';

class agendamento extends StatefulWidget {
 
const agendamento ({Key? key}) : super (key : key);

@override
 agendamentoState createState() => agendamentoState();

}

class agendamentoState extends State<agendamento> {
String? selectedValue;
String? selecionado2;
String? selecionado3;
List <String> medicos = ['10/11','13/11','14/11','15/11'];
List <String> dias = ['10/11','13/11','14/11','15/11'];
List <String> horarios = ['13:30','14:30','15:30','16:30'];
 @override
Widget build(BuildContext context ){
 return Scaffold(

appBar: AppBar(
 centerTitle: true,
  title: const Text('Médico'),
  ),
  body: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(border: Border.all(
          color: Colors.blue,
          width: 1
           ),
           borderRadius: BorderRadius.circular(15)        
          ),
        child: Padding(
          padding: const EdgeInsets.only(left:8.0),
          child: DropdownButton<String>(
            hint: const Text("Médico"),
            value:selectedValue,
            isExpanded: true,
             borderRadius: BorderRadius.circular(10),
              items: medicos.map((String value){
               return DropdownMenuItem<String>(
               value: value , child: Text(value));
              }).toList(),
          onChanged: (newvalue){
            setState((){
              selectedValue = newvalue;
            },
            );
           },
          ),
        ),
      ),
    )
  )
   appBar: AppBar(
 centerTitle: true,
  title: const Text('Dia'),
  ),
  body: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(border: Border.all(
          color: Colors.blue,
          width: 1
           ),
           borderRadius: BorderRadius.circular(15)        
          ),
        child: Padding(
          padding: const EdgeInsets.only(left:8.0),
          child: DropdownButton<String>(
            hint: const Text("Dia"),
            value:selecionado2,
            isExpanded: true,
             borderRadius: BorderRadius.circular(10),
              items: dias.map((String valueD){
               return DropdownMenuItem<String>(
               value: valueD , child: Text(valueD));
              }).toList(),
          onChanged: (newvalue2){
            setState((){
              selecionado2 = newvalue2;
            },
            );
           },
          ),
        ),
      ),
    )
  )
  appBar: AppBar(
 centerTitle: true,
  title: const Text('Horário'),
  ),
  body: Center(
    child: Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(border: Border.all(
          color: Colors.blue,
          width: 1
           ),
           borderRadius: BorderRadius.circular(15)        
          ),
        child: Padding(
          padding: const EdgeInsets.only(left:8.0),
          child: DropdownButton<String>(
            hint: const Text("Horário"),
            value:selecionado3,
            isExpanded: true,
             borderRadius: BorderRadius.circular(10),
              items: medicos.map((String valueH){
               return DropdownMenuItem<String>(
               value: valueH , child: Text(valueH));
              }).toList(),
          onChanged: (newvalue3){
            setState((){
              selecionado3 = newvalue3;
            },
            );
           },
          ),
        ),
      ),
    )
  )
 );
}
}
