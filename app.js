const hbs = require('hbs');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/src/views/partials');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render(__dirname + '/src/views/home', {
        name: "Jose ortiz",
        title: "Pagina oficial",
        title_page: "home"
    });
});
app.get('/generic', (req, res) => {
    res.render(__dirname + '/src/views/generic', {
        name: "Jose ortiz",
        title: "Pagina oficial",
        title_page: "generic"
    });
});
app.get('/elements', (req, res) => {
    res.render(__dirname + 'src/views/elements', {
        name: "Jose ortiz",
        title: "Pagina oficial",
        title_page: "elements"
    });
});
app.get('*', (req, res) => res.render(__dirname + '/src/views/404'));

app.listen(port, () => console.log("se esta ejecutando en el puerto ", port));
