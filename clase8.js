//Crea un ciclo que imprima los numeros del 0 al 30 y al final imprima un mensaje de 'boletos agoados'

for(let index = 0; index <= 30; index++){
    console.log(index);
    if(index === 30){
        console.log('boletos agoados')
    }
}

let counter = 0;
const CAPACITY = 30;

while(counter < CAPACITY){
    let available = CAPACITY - counter;
    const entradas = prompt('Cuantas entradas necesitas? quedan:' + available + 'boletos');
    counter += Number(entradas);
    if(counter >= CAPACITY) {
        alert('Ya no hay boletos')
    }
    console.log(counter)
};