let cargador = "pium!"

function chauchat(num){
    if(typeof num == "number"){
        return cargador.repeat(num)
    } 
    return "Illo, me he quedao pillá!"
}

console.log(chauchat("ramita"))