function multiplicar (numero1, numero2){
    if(numero1 == 0 || numero2 == 0 ){
        return 0;        
    } 
        return numero1 * numero2;
}

//console.log (multiplicar(5, 8))
module.exports = multiplicar;