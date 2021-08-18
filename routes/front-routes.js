const router = require('express').Router()
const frontViews = require('../controllers/frontviews')
const landings = require('../controllers/landings')//modelos ya hechos
const neas = require('../controllers/neas');
//const users = require('../controllers/users');

router.get('/', frontViews.home)

router.get('/landing', landings.getLanded)

router.get('/neas', neas.classType)

module.exports= router