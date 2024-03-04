/*console.log('Vinculado');*/

while (true) {
    let num = prompt('Ingrese un número del 1 al 20');

    if (num > 20 || num < 1) {
        console.log('El número ingresado debe ser entre 1 y 20');
    } else {
        console.log('Número correcto');
        break; 
    }
};