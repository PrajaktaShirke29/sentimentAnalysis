'use strict';

const Hapi = require('@hapi/hapi');
const route = require('./router/route');
const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });
    route.forEach( route => {
        server.route(route);
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
