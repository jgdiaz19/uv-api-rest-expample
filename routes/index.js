const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

// Carga de rutas dinamicas, se llena el objeto router con todos los archivos de rutas del api
fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file);
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`));
    } 
});


module.exports = router;