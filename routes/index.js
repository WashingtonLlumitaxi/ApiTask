const express = require('express');
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname; // nos da la ruta absoluta de sonde se encuentra

const removeExtension = (fileName) => {
    //TODO tracks.js [traks, js]
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => { //devuelve la rutas sincronas
    const name = removeExtension(file) //TODO users, storage, tracks
    if(name !== 'index'){
        console.log(`Cargando rutas: ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //TODO http://localhost: 3000/30000/api/tracks
    }
}) 


module.exports = router