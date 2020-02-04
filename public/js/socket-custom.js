var socket = io();
//escucha  
socket.on('connect', function() {
    console.log('conectado al server');
});

socket.on('disconnect', function() {
    console.log('Se perdio conexion');
});

//emit envian info
socket.emit('enviarMensaje', {
    usuario: 'Obeth',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta ', resp);
});

//excuchar info
socket.on('enviarMensaje', function(info) {
    console.log(info);
});