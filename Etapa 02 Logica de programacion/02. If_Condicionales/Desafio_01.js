/* Desafio 01: hora de practicar */

//Paso 01. Pregunta al usuario qué día de la semana es. 
const diaSemana = prompt ('Que dia de la semana es?')
//Paso 02. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
if ( diaSemana == 'sabado'  || diaSemana == 'domingo') {
    alert ('Buen fin de semana')
} 
//Paso 03. De lo contrario, muestra "¡Buena semana!".
else {
   alert ('Buena semana');
}
