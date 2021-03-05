require('colors');
const {inquirerMenu, pause, leerInput, listadoTareasBorrar, confirm, mostrarListadoCheckList} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const {guardarDb, leerdb} = require('./helpers/guardarArchivo')
console.clear();
const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDb = leerdb();
    if (tareasDb) tareas.cargarTareas(tareasDb);
    console.clear();
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear tarea
                const description = await leerInput('Descripcion: ');
                tareas.crearTarea(description);
                break;
            case '2':
                tareas.listarTareas();
                break;
            case '3':
                tareas.listarTareas(1);
                break;
            case '4':
                tareas.listarTareas(2);
                break;
                case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.completarTareas(ids);
                break;
            case '6':
                if (tareas.listadoArr.length > 0) {
                    const id = await listadoTareasBorrar(tareas.listadoArr);
                    if (id && id !== '0') {
                        const {desc} = tareas.getTarea(id);
                        const option = await confirm(`Esta seguro que desea borrar la tarea ${desc}`);
                        if (option) {
                            tareas.borrarTarea(id);
                            console.log(`Tarea ${desc} borrada con exito`);
                        }
                    }
                } else {
                    console.log("No posee tareas por borrar");
                }
                break;
        }
        guardarDb(tareas.listadoArr);
        await pause();
        console.clear();
    } while (opt !== '0');
}
main();
