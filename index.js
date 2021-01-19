const express = require('express');
require('dotenv').config();
//Crear Servidor Express
const app = express();

//Acceso al directorio público
app.use(express.static('public'));


//Rutas
//TODO: Auth: Información de usuario para autorizaciones
app.use('/api/auth', require('./routes/auth'));


//Configuración del puerto
app.listen(process.env.PORT,() => {
    console.log(`BackEnd corriendo en el puerto ${process.env.PORT}`);
})