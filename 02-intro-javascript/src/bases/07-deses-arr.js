/*Desestructuracion de Arreglos*/

const personajes = ['Goku', 'Vegeta', 'Trunks'];
 
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

/*
Para desestructurar un arreglo, es necesario generar
una consante con con corchetes cuadrados, en donde
podremos obtener los elementos de acuerdo al orden en que
estan en el arreglo, si por ejemplo no se quiere obtener el 
primer elemento se coloca una coma y el nombre que le daremos
al segundo elemento,
*/ 


const [ p1 ] = personajes;
const [,p2 ] = personajes;
const [,,p3] = personajes;
console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {

    return [
        'ABC', 
        123
    ];

};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const use_State = ( valor ) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const [nombre,setNombre] = use_State('Mambo');
console.log(nombre);
setNombre();