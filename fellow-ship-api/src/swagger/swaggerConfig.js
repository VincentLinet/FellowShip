const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        components: {},
        info: {
            title: 'FellowShip API',
            version: '1.0.0',
            description: 'FellowShip backend',
        }
    },
    apis: ['./src/routes/*.js', './src/swagger/swaggerDefinitions.js']
};

const swaggerConfig = swaggerJSDoc(options);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerConfig));

module.exports = router;
