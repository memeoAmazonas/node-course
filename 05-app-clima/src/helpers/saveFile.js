const fs = require('fs');
const file ='data.json';
const guardarDb = (data)=>{
    fs.writeFileSync(file, JSON.stringify(data));
}
const leerdb = () => {
    if (!fs.existsSync(file)) {
        return [];
    }
    return JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));
}
module.exports = { guardarDb, leerdb };
