

setInterval(() => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();

    console.log(hora + ':' + minuto + ':' + segundo);
})

/////////////
function RELOJ () {
    const hora_actual= new Date();

    let hora_24 = hora_actual.getHours();
    let minutos = hora_actual.getMinutes();
    let segundos = hora_actual.getSeconds();

    if(hora_24 > 12){
        let hora_12 = hora_24 -12;
        let imprimir_reloj = hora_12 + ":" + minutos + ":" + segundos + " P.M";
        console.log(imprimir_reloj)
        return imprimir_reloj
    }else{
        let imprimir_reloj = hora + ":" + minutos + ":" + segundos + " A.M";
        console.log(imprimir_reloj)
        return imprimir_reloj
    }
};

setInterval(RELOJ,1000);
