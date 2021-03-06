const express = require('express');
const app = express();
const port = 8080;
// mostrar contenido estatico;
app.use( express.static(__dirname +'/public'));

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})
app.get('/ruta-1', (req, res) => {
    res.send('ruta1 /ruta-1');
})
app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/public/404.html');
})

app.listen(port, ()=> console.log("se esta ejecutando en el puerto ", port));
