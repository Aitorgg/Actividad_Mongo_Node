const express = require("express");
const cors = require("cors");
require("dotenv").config();
const con = require("./db/connect");

con.createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api1/v1', require('./routes/ruta'))


app.listen(process.env.PORT, (a) => {
    console.log("conectado");
});