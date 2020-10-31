const express = require('express');
const path = require('path');
const { start } = require('repl');
require('dotenv').config();
// App de express
const app = express();

// Node Server 
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/sockets');

// Path público
const publicPath = path.resolve(__dirname, 'public');
// Usamos la ruta publica
app.use(express.static(publicPath));

// Servidor que ya esta escuchando peticiones al puerto 3000
server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);

});



/* Comandos en terminal 

npm init -y
npm i express
sudo npm i -g nodemon
npm i dotenv
npm i socket.io

// Para ejecutar node index.js o node index
// Para ejecutar nodemon index.js o nodemon index
// npm start
// npm run start:dev


*/