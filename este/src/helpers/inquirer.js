const colors = require('colors');
const inquirer = require('inquirer');
const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer',
        choices: [
            {
                value: '1',
                name: `${"1.".green} Crear tareas`,
            },
            {
                value: '2',
                name: `${"2.".green} Listar tareas`,

            },
            {
                value: '3',
                name: `${"3.".green} Listar tareas completadas`,
            },
            {
                value: '4',
                name: `${"4.".green} Listar tareas pendientes`,
            },
            {
                value: '5',
                name: `${"5.".green} Completar tarea(s)`,

            },
            {
                value: '6',
                name: `${"6.".green} Borrar tarea(s)`,
            },
            {
                value: '0',
                name: `${"0.".green} Salir \n`,
            }
        ]
    }
]
const inquirerMenu = async () => {
    console.log("======================".green);
    console.log("Seleccione una opcion".blue);
    console.log("======================\n".green);
    const {option} = await inquirer.prompt(menuOptions);
    return option;
}
const pause = async () => {
    const question = {
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'ENTER'.blue} para continuar\n`
    }
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            message,
            name: 'desc',
            validate(value) {
                if (value.length === 0) {
                    return 'Ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;

}


const listadoTareasBorrar = async (tareas) => {
    const choices = tareas.map((item, index) => ({value: item.id, name: `${colors.green(index + 1)}. ${item.desc}`}));
    choices.unshift({
        value: '0',
        name: 'Cancelar',
    })
    const question = [{
        type: "list",
        name: "id",
        message: "Seleccione una tarea para borrar",
        choices,
    }];
    const {id} = await inquirer.prompt(question);
    return id;
}
const confirm = async (message = "") => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        }
    ]
    const {ok} = await inquirer.prompt(question);
    return ok;

}
const mostrarListadoCheckList  = async (tareas) => {
    const choices = tareas.map((item, index) => ({
        value: item.id,
        name: `${colors.green(index + 1)}. ${item.desc}`,
        checked: item.completadoEn || false,
    }));
    const question = [{
        type: "checkbox",
        name: "ids",
        message: "Seleccione",
        choices,
    }];
    const {ids} = await inquirer.prompt(question);
    return ids;
}
module.exports = {inquirerMenu, pause, leerInput, listadoTareasBorrar, confirm, mostrarListadoCheckList};
