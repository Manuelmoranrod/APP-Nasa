const router = require('express').Router();
const landings = require('../controllers/landings')//modelos ya hechos

//GET a la DB con minimun_mass
router.get('/astronomy/landings:minimun_mass?', landings.getLanded)
//GET uno o mas masa exacta
router.get('/astronomy/landings/mass/:mass', landings.sameMass)
//GET nombre de meteoritos que sean de una clase
router.get('/astronomy/landings/class/:class', landings.classType)
///GET nombre masa y fecha de caidos en determinado tiempo

module.exports = router