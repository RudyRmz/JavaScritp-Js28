//Ejercicio 1: Saludo personalizado
const nombre = 'Pablo';

function saludar (name){
    if(name === 'Rudy'){
        return `¡Hola ${name}!`
    }else{
        return '¡Hola amigo!'
    }
}

console.log(saludar(nombre));

//Ejercicio 2: Suma de números
let n1 = 5;
let n2 = 100;

function sumar (n1, n2 , type ='suma'){
    let operation = 0;
    switch (type){
        case 'suma':
            operation = n1 + n2;
            break
        default:
            console.log('operacion no permitida')
    }
    return operation;
}
console.log(sumar(n1, n2))

//Ejercicio 3: Números pares

let numero = 11;

function esNumeroPar (numero){
    if (numero%2===0){
        return true
    }else{
        return false
    }
}

console.log(esNumeroPar(numero))

//Ejercicio 4: convertirCelsiusAFahrenheit 

let celcius = 30;

function convertirCelsiusAFahrenheit (temperatura){
    return (temperatura * 9/5) + 32 + '° farenheit';
}

console.log(convertirCelsiusAFahrenheit(celcius));

//Ejercicio 5: Calculadora de edad en años y días

let edad = 32;

function calcularEdadEnAnios (edad){
    return edad = {
        anios : edad,
        dias : edad * 365,
    }
}

console.log(calcularEdadEnAnios(edad));


