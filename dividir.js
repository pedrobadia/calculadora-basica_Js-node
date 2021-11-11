function dividir (numero1, numero2){
    if(numero2 == 0 ){
        return 'No se puede dividir por cero'
    } 
    return numero1 / numero2;
}

//console.log (dividir (20, 0))
module.exports = dividir;
