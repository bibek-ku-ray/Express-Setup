const express = require('express');
const { AirplainController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router()

router.post('/', 
    AirplaneMiddlewares.validateCreateRequest, 
    AirplainController.createAirplane
)

module.exports = router