require('colors');
const { writeAsync } = require('./helpers/write')
const argv = require('./config/yargs');

console.clear();
const {base, listar, end} = argv;
writeAsync(base, listar, end)
.then((el)=> console.log(el.rainbow));


