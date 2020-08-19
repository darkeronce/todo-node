// const argv = require("yargs").argv;

const argv = require('./config/yargs').argv;

const todo = require('./todo/todo');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let resTodo = todo.crear(argv.descripcion);
        console.log(resTodo);
        break;
    case 'listar':
        let todoList = todo.listar();

        for (let todo of todoList) {
            console.log(todo.descripcion);
            console.log(todo.completado);
        }

        break;
    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}