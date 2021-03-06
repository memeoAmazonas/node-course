require('dotenv').config();
require('colors');
const { guardarDb, leerdb } = require('./helpers/saveFile')
const {pause, menu, leerInput, listarCiudades} = require("./helpers/inquirer");

const Busquedas  = require('./models/busquedas')
const main = async () => {
    let option;
    const busqueda = new Busquedas();
    busqueda.cargarHistory(leerdb());
    do {
        option = await menu();
        switch (option) {
            case 1:
                // Buscar ciudades
                const lugar = await leerInput("Escriba una ciudad");
                const lugares = await busqueda.ciudad(lugar);
                //seleccionar ciudades
                const option = await listarCiudades(lugares);
                if (option === '0') continue;
                const { name, lng, lat, id } = lugares.find(f=> f.id === option);
                busqueda.agregarHistory(name);
                const clima = await busqueda.getClima(lat, lng);

                console.log("\n informacion de la ciudad\n".green);
                console.log("Ciudad: ".green, name);
                console.log("lat: ".green, lat);
                console.log("long: ".green, lng);
                if (clima){
                    const  { temp, desc, min, max } = clima;
                    console.log("temperatura: ".green, temp);
                    console.log("temperatura mininma: ".green, min);
                    console.log("temperatura maxima: ".green, max);
                    console.log("descripcion: ".green, desc);
                }
                break;
            case 2:
                busqueda.historial.forEach((it, index)=> {
                    console.log(index + 1,it);
                })

                break;
        }
        guardarDb(busqueda.historial);
        if (option !== 0) await pause();
    } while (option !== 0);
}
main();
