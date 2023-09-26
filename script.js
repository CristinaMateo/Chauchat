let cargador = "pium!"

function chauchat(){
 let num = parseInt( prompt("Introduzca un número")); 
    let resultado = cargador.repeat(num).match(/.{1,15}(.$)?/g)
    if(typeof num == "number"){
        return resultado.join(" ")
    }
        return "Illo, me he quedao pillá!"
}

console.log(chauchat())

 //cada 14 caracteres se debería dividir