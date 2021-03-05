const { writeAsync }  =require('../files/write-file/write-file')
const[,,arg="base=5"] = process.argv;
const[,base] = arg.split("=");
console.log(base);
writeAsync(base)
.then(file => console.log(`arhivo ${file} creado`))
.catch(e=> console.log(e));