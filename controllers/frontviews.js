const fetch = require('node-fetch')
const Landings = require('../models/landings')

const frontViews = {
    home: (req, res)=> {
        fetch('https://api.nasa.gov/planetary/apod?api_key=juYQuXYv03oRTAYfEHKaitKKoeu3jGmKnqZihq2s')
        .then(res => res.json())
        .then(apod=> {
            let imgUrl = apod.url 
            let description = apod.explanation

            res.status(200).render("home",{ imgUrl, description })
        })
    }
}

module.exports = frontViews