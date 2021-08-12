const router = require('express').Router();
const landings = require('../controllers/landings')//modelos ya hechos
const neas = require('../controllers/neas')

//GET a la DB con minimun_mass
router.get('/astronomy/landings:minimum_mass?:from?:to?', landings.getLanded)
//GET uno o mas masa exacta
router.get('/astronomy/landings/mass/:mass', landings.sameMass)
//GET nombre de meteoritos que sean de una clase
router.get('/astronomy/landings/class/:class', landings.classType)
///GET nombre masa y fecha de caidos en determinado tiempo
//router.get('/astronomy/landings:from?:to?', landings.byDate)

//NEAS
router.get('/astronomy/neas:class?:from?:to?', neas.classType)


module.exports = router