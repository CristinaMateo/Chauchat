let cargador = "pium!"

function chauchat(){
    let num = parseInt( prompt("Introduzca un número")); 
    if(typeof num == "number"){
        return cargador.repeat(num)
    } 
    return "Illo, me he quedao pillá!"
}

console.log(chauchat("ramita"))


 