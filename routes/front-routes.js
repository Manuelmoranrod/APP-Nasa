const router = require('express').Router()
const frontViews = require('../controllers/frontviews')

router.get('/',frontViews)
router.get('/landing',)