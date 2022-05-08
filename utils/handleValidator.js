const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw(); //Lanza excepcion cuando no se cumple validacion 
        return next(); //Si no hay errores continua con el codigo del controller
    } catch (error) {
        res.status(403);
        res.send({errors: error.array()});
    }
};

module.exports = validateResults;