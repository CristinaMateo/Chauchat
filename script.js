let cargador = "pium!"
/*
function chauchat(){
 let num = parseInt( prompt("Introduzca un número")); 
    let resultado = cargador.repeat(num).match(/.{1,15}(.$)?/g)
    if(typeof num == "number"){
        return resultado.join("\n")
    }
        return "Illo, me he quedao pillá!"
}

console.log(chauchat())

 */

 // 
 function chauchat(){
    let num = parseInt( prompt("Introduzca un número "));
    if(isNaN(num)){
        return "Illo, me he quedao pillá!"
    }
    let resultado = ""
    for(let i=1; i<=num; i++ ){
        resultado = resultado.concat(cargador, "\n")
        if(i % 3 === 0){
           resultado = resultado.concat("\n")
        }
    }
    return resultado
}

console.log(chauchat())
