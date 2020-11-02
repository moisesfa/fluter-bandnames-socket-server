// Comfiguración para que trabaje utilizando Sockets 
// Mensajes de sockets 

const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Heroes del silencio'));
bands.addBand(new Band('Metallica'));
bands.addBand(new Band('Queen'));
bands.addBand(new Band('Oasis'));

//console.log(bands);

io.on('connection', client => {
    console.log('Cliente conectado');

    // Cuando se conecte un cliente le envio las bandas 
    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // Escuchar los mensajes 
    client.on('mensaje', (payload) => {
        console.log('Mensaje recibido !!!', payload);

        // Emito un mensaje a todos los clientes conectados
        io.emit('mensaje', { admin: 'Respuesta del servidor' });

    });

    client.on('vote-band', (payload) => {
        //console.log(payload);
        bands.voteBand(payload.id);
        // Notifivar a todos los que esten escuchando que ha habido un cambio 
        io.emit('active-bands', bands.getBands());


    });

    client.on('add-band', (payload) => {
        //console.log(payload);
        bands.addBand(new Band(payload.name));
        // Notifivar a todos los que esten escuchando que ha habido un cambio 
        io.emit('active-bands', bands.getBands());
    });

    client.on('delete-band', (payload) => {
        //console.log(payload);
        bands.deleteBand(payload.id);
        // Notifivar a todos los que esten escuchando que ha habido un cambio 
        io.emit('active-bands', bands.getBands());
    });


    // client.on('prueba-mensaje', (payload) => {
    //     console.log('Mensaje recibido !!!', payload);
    //     // Emito un mensaje a todos los clientes conectados
    //     // io.emit('prueba-mensaje', payload);
    //     // Emitir a todos menos al cliente que lo emite 
    //     client.broadcast.emit('prueba-mensaje', payload);

    // });


});