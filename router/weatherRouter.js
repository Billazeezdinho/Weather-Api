const { getWeather } = require('../controller/weatherController');

const router = require('express').Router()
router.get('/weather', getWeather);

module.exports = router;