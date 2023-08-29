const invitados = [
    'fredy',
    'penny',
    'gerald',
    'arnold',
];

for(const persona of invitados){
    console.log(persona.toUpperCase());
    console.log('------------');
};


const listNumber = [1,4,7,3,89,0,5];

const evaluarLista = (lista) => {
    const newList = [];
    for(const numero of lista){
        if(numero>5){
            newList.push(numero)
        }
    }
    return newList;
};

console.log(evaluarLista(listNumber))

const invitados2 = [
    'freddy',
    'penny',
    'gerald',
    'arnold'
];
console.log(invitados2.reverse())
// for(let index = 0; index < invitados2.length; index++ ){
//     console.log(index +1, invitados2[index])
//     console.log('-------')
    
// };

// Reversa
for(let index = invitados2.length -1; index >= 0; index-- ){
    console.log(index +1, invitados2[index])
    console.log('-------')
};


//////////////////////////
// -crear un arreglo
// -crear una funcion
// -ejecutar y enviarle los argumentos a la funcion
// -crear una constante que funcione como un contador inciandolo en 0
// -iterar el arreglo del parametro
// -en cada iteracion evaluar si el elemento solicitado es igual al del arreglo
// -entonces si la evaluacion es verdadera se le suma +1 al contador
// -retornar el contador

const numberList = [1,3,5,7,5,7,5, 5];
const invitados3 = [
    'freddy',
    'penny',
    'gerald',
    'arnold', 
    'freddy'
];

const find = (find, list) => {
    let counter = 0;
    for(let index = 0; index < list.length; index++ ) {
        if(list[index] === find){
            counter++
        }
    }
    console.log(counter)

};
// findNumber(5, numberList )

find('freddy', invitados3 )