const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    //Emitir mensaje para el cliente
    client.emit('enviarMensaje', {
        usuario: "admin",
        mensaje: "Welcome to my site"
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar cliente
    client.on('enviarMensaje', (info, callback) => {
        //console.log(info);

        client.broadcast.emit('enviarMensaje', { info });

        // callback({ respuesta: 'todo bien' });
    });

});