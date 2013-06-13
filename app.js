var express = require('express'),
    http = require('http');
var app = express();


app.get('/', function(request, response) {
    response.send('Bienvenido a Tutoriales Web!!');
});


var PORT = process.env.PORT || '3000';

http.createServer(app).listen(PORT, function() {
    console.log('Servidor creado y escuchando en el puerto ' + PORT);
});