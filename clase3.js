//SWITCH

const score = 70;
let result = '';

switch (score){
    case 50:
        result = 'F'
        break
    case 60:
        result = 'E'
        break
    case 70:
        result = 'D'
        break
    default:
        result = 'N/A'
}

console.log('Tu calificación es: ' + result)

/////////////////FUNCION

const primerNumero = 4;
const segundoNumero = 6;

function sumar (n1, n2){
    const resultado = n1 + n2;
    return resultado;
};

const sumatoria = sumar(primerNumero, segundoNumero);

console.log(sumatoria)

/////////////////
function operationByType (n1 = 0, n2 = 0, type ='suma'){
    const isCero =n1 === 0 || n2 ===0;
    if(isCero && type === 'division'){
        console.log('no se puede')
        return 'no se puede'
    }
    let operation = 0;
    switch (type){
        case 'suma':
            operation = n1 + n2;
            break
        case 'resta':
            operation = n1 - n2;
            break
        case 'division':
            operation = n1 / n2;
            break
        case 'multiplicacion':
            operation = n1 * n2;
            break
        default:
            console.log('operacion no permitida')
    }
    return operation;
}

//operationByType(1,3,'suma')
console.log(operationByType(5, 9, 'multiplicacion'))