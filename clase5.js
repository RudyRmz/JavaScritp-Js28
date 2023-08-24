const persona = {
    mombre: 'Rodolfo Ramirez',
    altura: 1.80,
    direccion: {
        calle: 'Central',
        numero:{
            interior:89,
            exterior:400,
        },
        colonia:'Loma Blanca',
    },
    telefono:{
        casa:4640654,
        trabajo:465465464,
    },
    saludar:(person) => 'Hola amigo ' + person, 
};

/////

const getDataKey = (keyPrincipal, keySecondary) => {
    if(keySecondary && persona[keyPrincipal]){
        console.log(persona[keyPrincipal][keySecondary])
    }else{
        console.log(persona[keyPrincipal])
    }
};

getDataKey('direccion','colonia');
getDataKey('altura')


//const getDataKey = (key) => {
//    console.log(persona [key])
//};

getDataKey('altura')
getDataKey('telefono')

const propiedad ='telefono';
console.log(persona[propiedad])

console.log(persona['altura'])

const coloniaPersona = persona.direccion.colonia;

console.log(coloniaPersona)
console.log(persona.saludar('Rudy'))
console.log(persona)
console.log(persona.direccion.calle)
console.log(persona.direccion.numero.interior)


