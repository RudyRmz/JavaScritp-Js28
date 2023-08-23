
//Ejercicio 1: Saludo personalizado


//Ejercicio 2: Suma de números
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
console.log(sumar(5, 6))

//Ejercicio 3: Números pares

function esNumeroPar (numero){
    if (numero%2===0){
        return true
    }else{
        return false
    }
}

console.log(esNumeroPar(11))

//Ejercicio 4: convertirCelsiusAFahrenheit 

//Ejercicio 10: Calculadora de edad en años y días



