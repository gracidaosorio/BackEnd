const express = require('express');
require('dotenv').config();
//Crear Servidor Express
const app = express();

//Acceso al directorio público
app.use(express.static('public'));


//Rutas
//app.get('/',(req,res) => {
//    res.json({
//        ok: true,
//        msg: "Recibido",
//    });
//});

//Configuración del puerto
app.listen(process.env.PORT,() => {
    console.log(`BackEnd corriendo en el puerto ${process.env.PORT}`);
})