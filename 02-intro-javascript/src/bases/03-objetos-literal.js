// Template String

const nombre = 'Bruno';
const apellido = 'Casanueva';

const nombreCompleto = nombre + ' ' + apellido;
const nombreTemplate = `${nombre} ${apellido}`;

console.log(nombreCompleto);
console.log(nombreTemplate);

function getSaludo(nombre) {
    return 'Hola '+nombre;
}

getSaludo();

console.log(`Este es un texto: ${getSaludo(nombreTemplate)}`);