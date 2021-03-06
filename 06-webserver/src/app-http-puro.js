const http = require('http');
http.createServer((req, res) => {

    /* respuesta normal */

    //res.writeHead(200, {'Content-Type': 'application/json'});
    //const response = {name: 'jose', id: 1};
    //El objeto siempre debe ir sereailizado con JSON.stringify, independiente si el 'Content-Type': 'application/json' o lo que sea
    //res.write(JSON.stringify(response));

    /* respuesta normal */

    /* respuesta archivo csv */
    res.setHeader('Content-Disposition', 'attachment; filename=example.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' });
    res.write('id, name\n');
    res.write('id1, name1\n');
    res.write('id2, name2\n');
    res.write('id3, name3\n');
    /* respuesta archivo csv */



    //se usa para decirle al servidor que ya termino de hacer la peticion
    res.end();

}).listen(8080);
console.log("escuchando en el puerto", 8080);
