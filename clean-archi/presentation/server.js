'use strict';

const Hapi = require('@hapi/hapi');

const usecases = require('../domain/usecases');
const datasource = require('../infrastructure/datasource');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/courses',
        handler: () => {

            // Clean archi: on va dépendre du métier,
            // on va appeler une méthode définie dans le métier
            return usecases.getGroceryList(datasource);
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();