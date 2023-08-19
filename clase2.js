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


const puntuacion = 90;
let calificaion = 'camisa';

if (puntuacion === 90){
    calificaion = 'A'
}else if (puntuacion === 80){
    calificaion = 'B'
}else if (puntuacion === 70){
    calificaion = 'C'
}else if (puntuacion === 60){
    calificaion = 'D'
} else if (puntuacion < 50){
    calificaion ='Estudia mas'
}