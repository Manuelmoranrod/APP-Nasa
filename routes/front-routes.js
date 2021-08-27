const router = require('express').Router()
const frontViews = require('../controllers/frontviews')
const landings = require('../controllers/landings')//modelos ya hechos
const neas = require('../controllers/neas');
const users = require('../controllers/users');
//Foto del dia
router.get('/', frontViews.home)
//Mapa de meteoritos caidos
router.get('/landing', landings.getLanded)

router.get('/neas', neas.classType)

//Users part 
router.get('/register', users.register)
router.post('/register', users.createUser)
router.get('/search', users.getData)
//mostrar todos los usuarios
//router.get('/users', users)
//router.get('/edit/:num_afiliacion', users.)

module.exports= router