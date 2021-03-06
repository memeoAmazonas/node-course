const hbs = require('hbs');
require('dotenv').config();
const express = require('express');
const appExpressHandlebars = express();
const port = process.env.PORT;

//handlebars
appExpressHandlebars.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
appExpressHandlebars.use(express.static(__dirname + '/public'));

appExpressHandlebars.get('/', (req, res) => {
    res.render(__dirname + '/views/home', {
        name: "Jose ortiz",
        title: "Pagina oficial",
        title_page: "home"
    });
});
appExpressHandlebars.get('/generic', (req, res) => {
    res.render(__dirname + '/views/generic', {
        name: "Jose ortiz",
        title: "Pagina oficial",
        title_page: "generic"
    });
});
appExpressHandlebars.get('/elements', (req, res) => {
    res.render(__dirname + '/views/elements', {
        name: "Jose ortiz",
        title: "Pagina oficial",
        title_page: "elements"
    });
});
appExpressHandlebars.get('*', (req, res) => res.render(__dirname + '/views/404'));

appExpressHandlebars.listen(port, () => console.log("se esta ejecutando en el puerto ", port));
