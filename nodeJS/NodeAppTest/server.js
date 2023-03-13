const express = require('express'); //Requerir Framework
const app = express(); //Crear una instancia de Express
const morgan = require('morgan'); 
const bodyParser = require('body-parser');

//Configuraciones
app.set('port', 4000);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas
app.get('/', (req, res) =>{
    res.send({Title: 'Hello ADSI 023'});
});

//Se inicia el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Sever Running on port ${app.get('port')}`);
})