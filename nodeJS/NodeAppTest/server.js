const express = require('express'); //Requerir Framework
const app = express(); //Crear una instancia de Express
const morgan = require('morgan'); 

//Configuraciones
app.set('port', 4000);

//Middlewares
app.use(morgan('combined'));

//Rutas
app.get('/', (req, res) =>{
    res.send({Title: 'Hello ADSI 023'});
});

//Se inicia el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Sever Running on port ${app.get('port')}`);
})