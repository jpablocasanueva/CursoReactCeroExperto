/*
    Desestructuracion de Objetos
*/

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


/*Para desestructura un objeto es necesiario 
poner entre corechetes los nombres de las 
propiedades que queremos extraer/
*/
const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


/*
La destructuracion tambien se puede utilizar
dentro de los argumentos que recibe una funncion
para esto debe colcoar entre corchetes las propiedades
que deseamos obtener. Si queemos agregar una propiedad
que no tiene el objeto lo podemos hacer dandole un valor
por defecto, por el ejemplo el rango
*/
const use_Context = ( { nombre, edad , rango = 'Capitan', clave } ) => {

    // console.log(nombre, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232 
        }
    }

}

/*
Si necesita obtener la propiedades dentro de un obejto 
del objeto que estamos destructurando se debe colocar 
el nombre de la proeidad dos puntos y entre corchetes
las propiedades a extrer proiedad:{ propiedad1, propiedad2,...}
*/

const { nombreClave, anios, latlng: {lat, lng} } = use_Context(persona);
console.log(nombreClave, anios );
console.log(lat,lng);