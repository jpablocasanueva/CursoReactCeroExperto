// Funciones

const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`

console.log(saludar('Luna'));
console.log(saludar2('Bruno'));
console.log(saludar3('Mambo'));


const getUser = () => (
    {
        uid: 'ABC123',
        username: 'Bruno_2021'
    }
);

const user = getUser();
console.log(user);

// Tarea

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
    }
);

const usuarioActivo = getUsuarioActivo('luna');

console.log(usuarioActivo);