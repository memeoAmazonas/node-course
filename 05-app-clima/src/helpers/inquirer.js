const colors = require('colors');
const inquirer = require('inquirer');
const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer',
        choices: [
            {
                value: 1,
                name: `${"1.".green} Buscar Ciudad`,
            },
            {
                value: 2,
                name: `${"2.".green} Historial`,

            },
            {
                value: 0,
                name: `${"0.".green} Salir \n`,
            }
        ]
    }
]
const menu = async () => {
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
                    return 'Ingrese un valor valido';
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;

}


const listarCiudades = async (ciudades) => {
    const choices = ciudades.map((item, index) => ({value: item.id, name: `${colors.green(index + 1)}. ${item.name}`}));
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar',
    })
    const question = [{
        type: "list",
        name: "id",
        message: "Seleccione una ciudad",
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
module.exports = {menu, pause, leerInput, listarCiudades, confirm, mostrarListadoCheckList};
