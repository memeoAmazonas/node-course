const argv  = require('yargs')
.option("b",{
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la multiplicacion"
})
.option("e",{
    alias: "end",
    type: "number",
    default: 10,
    describe: "maximo de numeros a multiplicar"
})
.option("l",{
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "si esta presente se inprime la tabla"
})
.check((argv, options)=> {
 if(isNaN (argv.base)){
     throw 'La base debe ser un numero';
 }   
 if(typeof argv.listar  !== 'boolean'){
     throw 'Listar debe ser true o false';
 }
 if(argv.end <= 0){
     throw 'El parametro end no puede ser 0 o negativo';
 }
 return true;
})
.argv;
module.exports = argv;