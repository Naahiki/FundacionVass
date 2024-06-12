// CheckPoint 7 
// Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
// Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"

const checkpoint7 = (a, b, c, d) => {
    let sum1 = a + b;
    let sum2 = c + d;
    let result = sum1 * sum2;

    if (result > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

checkpoint7(10, 20, 5, 6); // output: ¡El número es mayor que 50!

checkpoint7(1, 2, 3, 1); // output: ¡El número es menor que 50!

