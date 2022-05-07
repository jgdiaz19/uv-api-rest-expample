require("dotenv").config();
const express = require("express");
const cors = require("cors");

const dbConect = require("./config/mongo");

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('👌 Servidor escuchando en puerto: ' + port);
});

dbConect();