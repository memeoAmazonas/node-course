const fs = require('fs');
const writeAsync = async (base, listar = false) => {

    try {
        let salida = '';
        const total = Array.from(Array(10).keys());
        const multiplicar = (base) => total.forEach(ite => {
            salida += `${base} X ${ite + 1} = ${base * (ite + 1)} \n`;
        })
        multiplicar(base);
        if(listar){
        console.log("=================");
        console.log(`crear la tabla del ${base}`);
        console.log("=================");
        console.log(salida);
        console.log("=================");
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `archivo tabla-${base}.txt creado exitosamente`;
    } catch (e) {
        throw e;
    }
}
module.exports = { writeAsync };
