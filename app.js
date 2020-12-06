const express = require("express");
const mysql = require("mysql");
const path = require("path");
//const mycon = require('express-myconnection');
const app = express();
app.set('port', process.env.PORT || 3000);
//Enrutamiento
app.use(express.static(path.join(__dirname, 'public')));

//Conexion
const mysqlC = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "n0m3l0",
    port: 3306,
    database: "nodeimg" 
});

//Comprobacion
mysqlC.connect((error) => {
    if (!error) {
        console.log('Base de datos conectada UwU');
    } else {
        console.log('Conexion fallida UnU');
    }
});

//Iniciando server
const server = app.listen(app.get('port'), () =>  {
    console.log("Server funcionando en puerto: ", app.get('port'));
});