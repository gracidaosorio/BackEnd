const express = require('express');

//Crear Servidor Express
const app = express();

//Rutas
app.get('/',(req,res) => {
    console.log('Se recibio una peticion en /');
    res.json({
        ok: true,
        msg: "Recibido",
    });
});

//Configuración del puerto
app.list(4000,() => {
    console.log(`BackEnd corriendo en el puerto ${4000}`);
})