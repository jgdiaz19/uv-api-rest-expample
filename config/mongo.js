const mongoose = require("mongoose");

const dbConect = () => {
    const DB_URI = process.env.DB_URI;

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, resp) => {
        if (!err) {
            console.log("BD MONGO CONECTADA!!! 🤟");
        } else {
            console.log("ERROR DE CONEXION 💀 " + err);

        }
    });
}

module.exports = dbConect;