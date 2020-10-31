// Comfiguración para que trabaje utilizando Sockets 
// Mensajes de sockets 

const { io } = require('../index');

io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // Escuchar los mensajes 
    client.on('mensaje', (payload) => {
        console.log('Mensaje recibido !!!', payload);

        // Emito un mensaje a todos los clientes conectados
        io.emit('mensaje', { admin: 'Respuesta del servidor' });

    });

});