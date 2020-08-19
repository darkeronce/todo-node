const descripcion = {
    demand: true,
    alias: 'd',
};

const completado = {
    alias: 'c',
    default: true,
};

const argv = require('yargs')
    .command('crear', 'Crear un todo', { opts: descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado,
    })
    .command('borrar', 'Elimina un todo', { opts: descripcion })
    .help().argv;

module.exports = {
    argv,
};