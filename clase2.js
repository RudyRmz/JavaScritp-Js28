console.log(2>1 && 4 < 5 && 1 > 0)
//todas las comparaciones son verdaderas

console.log(2>1 || 4 > 5 || 1 > 0)
//al menos una de las condiciones es veradera

const tengoMonedas = false;

if(tengoMonedas){
    console.log('voy a comprar')
}

if(!tengoMonedas){
    console.log('consigue monedas')
}

let estaSol = true;

if(estaSol){
    console.log('me pongo los lentes')
} else{
    console.log('salgo')
}

const clima = 'lluvioso';
let prenda = 'camisa';

if (clima === 'calor'){
    prenda = 'short'
}else if (clima === 'frio'){
    prenda = 'abrigo'
}else if (clima === 'lluvioso'){
    prenda = 'impermeable'
}else {
    prenda = 'pijama'
} 

console.log('me pongo ' + prenda)

const password = 'cacahuate';
const authFacial = true;
const email = 'email@.com'
const userName = 'mentor91';
let usuarioValido ='false';

if(password === 'cacahuate' && authFacial && (email === 'email@.com' || userName === 'mentor91')){
    usuarioValido = true;
    console.log('usuario es valido')
} else{
    console.log('usuario no valido')
}

////////1.Verificar si un número es positivo, negativo o cero.
const numero = -6;
let valor = 'Positivo'

if (numero < 0){
    valor = 'Negativo'
} else if (numero === 0){
    valor = '0'
}

console.log ('El valor es ' + valor)

///////2.Determinar si un número es par o impar.

const number = 3;
let tipo = 'par';
    
    if(number%2==0){
        tipo = 'par'
    }else{
        tipo = 'impar'
    }

console.log('El numero es ' + tipo)

////////3.Calificar un examen en base a la puntuación.
//ejemplo:
//si es mayor o igual a 90 es 'A'
//si es mayor o igual a 80 es 'B'
//si es mayor o igual a 70 es 'C'
//si es mayor o igual a 60 es 'D'

let puntuacion = 61;
let calificacion = 'A';

if (puntuacion >= 90){
    calificacion = 'A'
}else if (puntuacion >= 80){
    calificacion = 'B'
}else if (puntuacion >=  70){
    calificacion = 'C'
}else if (puntuacion >=  60){
    calificacion = 'D'
} else if (puntuacion < 60){
    calificacion ='Estudia mas'
}

console.log('Tu calificacion es: ' + calificacion)