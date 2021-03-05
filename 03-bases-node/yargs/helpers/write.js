const fs = require('fs');
const colors = require('colors');
const writeAsync = async (base, listar = false, end) => {

    try {
        let salida = '';
        const total = Array.from(Array(end).keys());
        const multiplicar = (base) => total.forEach(ite => {
            salida += `${base} X ${ite + 1} = ${base * (ite + 1)} \n`;
        })
        multiplicar(base);
        if(listar){
        console.log("=================".green);
        console.log(`${colors.bgBlue('crear')} la tabla del ${base}`);
        console.log("=================");
        console.log(salida);
        console.log("=================");
        }
        fs.writeFileSync(`./files/tabla-${base}.txt`, salida);
        return `archivo tabla-${base}.txt creado exitosamente`;
    } catch (e) {
        throw e;
    }
}
module.exports = { writeAsync };
//../files/tabla-${base}.txt