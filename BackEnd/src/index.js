'use strict'
const express = require("express") //IMPORTAMOS EXPRESS
const app = express() //SE ASGINA EXPRESS A LA VARIABLE APP 
const bodyParser =  require('body-parser') //convertir las respuestas en json

//DEFINIIMOS EL PUERTO
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false})) // cargar middlewares se ejecutar antes de cargar una ruta
app.use(bodyParser.json()); //convertir los datos a json

//cargamos las rutas
var bautizo_routes = require('./routes/bautizo');
var matrimonio_routes = require('./routes/matrimonio');

///CORS para permitir el acceso http al api desde un frontEnd
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//RUTAS
app.use(bautizo_routes);
app.use(matrimonio_routes);

app.listen(app.get('port'), ()=> {
    console.log("Server running on port", app.get('port'))
})

module.exports = app; //Exportamos el fichero 
