// Variables y Contantes

/**
 * Ya no se debe usar VAR
*/

/*const se usa para cuando el valor no va a cambiar en el tiempo */

const nombre = 'Bruno';
const apellido = 'Casanueva';

/*let se utilizada cuando el valor puede cambiar en el tiempo , 
* solo viven el scope
*/

let valorDado = 6;
valorDado = 4;

console.log(nombre, apellido, valorDado);

/* Dentro del if valorDado tendra el valor de 6 y fuera 
* del if tendra el valor de 4
*/
if(true) {
    let valorDado  = 6;
    console.log(valorDado);
}

console.log(valorDado);
