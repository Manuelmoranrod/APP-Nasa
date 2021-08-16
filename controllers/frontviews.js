const fetch = require('node-fetch')
const Landings = require('../models/landings')

const frontViews = {
    home: (req,res)=> {
        fetch('https://api.nasa.gov/planetary/apod')// falta KEY

    }
}