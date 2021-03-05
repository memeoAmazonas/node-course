const { writeAsync } = require('./write-file');

console.clear();
writeAsync(10)
.then(file => console.log(`Archivo ${file} creado con exito`))
.catch(error => console.log(error));