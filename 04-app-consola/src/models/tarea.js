const {v4: uuidV4} = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uuidV4();
        this.desc = desc;
    }
}

module.exports = Tarea;
