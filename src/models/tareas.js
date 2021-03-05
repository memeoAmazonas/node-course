const Tarea = require('./tarea');
const colors = require('colors');

class Tareas {

    _listado = {};

    get listadoArr() {
        return Object.keys(this._listado).map((item) => this._listado[item]);
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    getTarea(id) {
        return this._listado[id];
    }

    cargarTareas(tareas = []) {
        tareas.forEach((item) => this._listado[item.id] = item);
    }


    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listarTareas(status = 0) {
        const isCompleted = (status) => status ? "Completada".green + ` en ${colors.green(status)}` : "Pendiente".red;
        let data = [];
        debugger;
        switch (status) {
            case 0:
                data = this.listadoArr;
                break;
            case 1:
                data = this.listadoArr.filter((item) => item.completadoEn);
                break;
            case 2:
                data = this.listadoArr.filter((item) => !item.completadoEn);
                break;
        }
        if (data.length > 0) {
            data.forEach((item, index) => console.log(`${colors.green(index + 1)}. ${item.desc} :: ${isCompleted(item.completadoEn)}`));
        } else {
            console.log("No existen tareas que mostrar");
        }

    }

    completarTareas(ids = []) {
        ids.forEach((item) => {
            const tarea = this._listado[item];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        })
        this.listadoArr.forEach((item) => {
            if (!ids.includes(item.id)) this._listado[item.id].completadoEn = null;
        })
    }

}

module.exports = Tareas;
