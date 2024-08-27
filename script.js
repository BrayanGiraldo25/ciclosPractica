alert("Pagina de practica JS, ciclos de repeticion/loops");

/* Linea o bloque de codigo que se va a repetir n cantidad de veces, donde n puede ser cualquier numero que el usuario desee, y podra ser conocido o no por el usuario */
/* Son estructuras que se repiten bajo una condicion booleana */
/*
- Ciclo para = For
- Ciclo mientras = While
- Ciclo repita = do-while 

For:
- Se aplica solo cuando se sabe la cantidad de veces a repetir
- Esta definido por un inicio de variable, una condicion y un incremento
-Un ciclo for se puede alargar a un ciclo while o un chico do-while

While (mientras):
- Se aplica cuando se sabe y no se sabe la cantidad de veces a repetir
- Por defecto es un ciclo infinito
- Esta definidio por un inicio de variable, una condicion y un incremento
    nota: antes de ejectuar el codigo asegurese de tener el incremento definido

While (Centinela o bandera):
- El centinela o bandera es una condicion aplicada a la accion
- El centinela o bandera modifica el valor booleano directamente
- Siempre se ejecuta si el valor booleano es verdadero
- se puede migrar a un ciclo do-while

Ciclo repita (Do-While):
- Se aplica cuando se sabe y no se sabe la cantidad de veces a repetir
- Por defecto es un ciclo infinito
- Se ejecuta si el valor booleano es verdadero
- Siempre garantiza la ejecucion del codigo minimo una vez
 */



let repetir = true;
while(repetir){
let estado = prompt("Desea repetir el codigo? \n1 - si\n2 - no");
if (estado == 2){
    repetir = false;
}
   
    }

/* for (let index = 0; index < 5; index++){
    let numeroUno = Number(prompt("Ingresa un numero: "));
    let numeroDos = Number(prompt("Ingresa un numero: "));
    let operacion = prompt("Seleccione: \n1 - Sumar\n2 - restar\n3 - Multiplicar\n4 - dividir ");

    switch(operacion){
        case "1":
            console.log(numeroUno + numeroDos);
            break;
        case "2":
            console.log(numeroUno - numeroDos);
            break;
        case "3":
            console.log(numeroUno * numeroDos);
            break;
        case "4":
            console.log(numeroUno / numeroDos);
            break;
        default:
            console.log("Error, ingrese de nuevo");
    }
}  */

let ejemplo1 = true;

do {
    let ejemplo = prompt("no se, no se me ocurre un texto ahora");

    switch(ejemplo){
        case 1:
            console.log("Texto de ejemplo 1");
            break;
        case 2:
            console.log("Texto de ejemplo 2");
            break;
        case 3:
            console.log("Texto de ejemplo 3");
            break;
        case 4:
            console.log("Texto de ejemplo 4");
            break;
        case 5:
            console.log("Como dijo andrea, chao gonorrea");
            ejemplo1 = false;
            break;
        default:
            console.log("No estoy muy imaginativo ahora");

    }
} while (ejemplo1 !== false);

