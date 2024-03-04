/*Calcular factorial*/

const calcularFactorial = (numero) => {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
};

/*Solicitar número */
const numero= prompt('Ingrese un número entre 1 y 20')
/*Validar número y calcular tabla */
        if (numero <= 20 && numero >= 1) {
           for (let i = 1; i <=numero; i++){
            console.log(`${i} x ${numero} = ${i*numero}`)
           }
           /*Agregar factorial */
           for (let i = 1; i<= numero; i++){
            console.log(`El factorial de ${i} es: ${calcularFactorial(i).toLocaleString}`)
           }
        } else {
            console.log('Número fuera del rango');         
        }


    
    
