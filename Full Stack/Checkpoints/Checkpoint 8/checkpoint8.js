//1. Crear un bucle for que imprima cada nombre en la lista:

// Lista de nombres
const list = ["Velma", "Exploradora", "Jane", "John", "Harry"];

// Bucle for para imprimir cada nombre
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}


//2. Crear un bucle while que recorra la misma lista e imprima los nombres:

// Inicializamos el contador
let contador = 0;

// Bucle while para imprimir cada nombre
while (contador < list.length) {
    console.log(list[contador]);
    contador++;
}


//3.Crear una función de flecha que devuelva "Hola mundo":

// Función de flecha que devuelve "Hola mundo"
const greeting = () => "Hola mundo";

// Llamada a la función y mostrar el resultado en la consola
console.log(greeting());