const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const yaml = require('js-yaml');
const fs = require('fs');
const swaggerUI = require('swagger-ui-express');
const { router } = require('../config/routes');

const swaggerDocument = yaml.load(fs.readFileSync('apidocs.yaml', 'utf8'))

app
    .use(cookieParser())
    .use(express.json())
    .use('/api/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.json())
    .use(router)

module.exports = { app };