const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // Directorio Público
        this.app.use( express.static('public') );

        //restringir direcciones
        this.app.use( cors() );

        //parse y lectura del body
        this.app.use( express.json() );

    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}


module.exports = Server;