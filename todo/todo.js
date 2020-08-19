const fs = require('fs');

let todoList = [];

const guardarDb = () => {
    let data = JSON.stringify(todoList);

    return new Promise((resolve, reject) => {
        fs.writeFile('./db/data.json', data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`El archivo con la data ${data} fue creado correctamente`);
            }
        });
    });
};

const cargarDb = () => {
    try {
        todoList = require('../db/data.json');
    } catch (err) {
        todoList = [];
    }
};

const crear = (descripcion) => {
    cargarDb();

    let todo = {
        descripcion,
        completado: false,
    };

    todoList.push(todo);

    guardarDb();

    return todo;
};

const listar = () => {
    cargarDb();
    return todoList;
};

const actualizar = (descripcion, completado = true) => {
    cargarDb();

    let index = todoList.findIndex((todo) => todo.descripcion === descripcion);

    if (index >= 0) {
        todoList[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return true;
    }
};

const borrar = (descripcion) => {
    cargarDb();

    let filterList = todoList.filter((todo) => todo.descripcion !== descripcion);

    if (todoList.length === filterList.length) {
        return false;
    } else {
        todoList = filterList;
        guardarDb();
        return true;
    }
};

module.exports = {
    crear,
    listar,
    actualizar,
    borrar,
};