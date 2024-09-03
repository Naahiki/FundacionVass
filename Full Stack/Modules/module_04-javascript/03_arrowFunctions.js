// FUNCIONES FLECHA

// regular function declaration
function fullName(fName, lName){
    console.log(`${fName} ${lName}`);   // Nahiki Larrea
}

fullName("Nahiki", "Larrea");


// function expression -> cuadno la guardamos en una variable
const fullNameExpression = function(fName, lName){
    console.log(`${fName} ${lName}`);   // Nahiki Larrea
}

fullNameExpression("Nahiki", "Larrea");


// arrow function
const helloWorld = () => {
    console.log("Hello World!");        // Hello World!
}

helloWorld();



// ARROW FUNCTION WITH SINGLE ARGUMENT

const firsName = fName => {console.log(fName.toUpperCase());}     // NAHIKI
firsName("Nahiki");
// si solo usamos 1 argumento, no son necesarios los paréntesis, sino si lo son



// ARROW FUNCTION WITH MORE ARGUMENTS

const fullNameArrow = (fName, lName) => {
    console.log(`${fName} ${lName}`);   // Nahiki Larrea
}
fullNameArrow("Nahiki", "Larrea");