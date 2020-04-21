const sentilize = require('../sentilizer/sentilizer')

const route = [
    {
        method: 'POST',
        path: '/sentilize',
        handler: (request, h) => {
            const payload = request.payload;
            return sentilize(payload.sentence);
        }
    },

    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'This is the home page';
        }
    }

]

module.exports= route;