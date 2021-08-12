const Neas = require('../models/neas')

const neas = {
    classType: async (req,res) => {
        let classType = await req.query.class
        let from = await req.query.from
        let to = await req.query.to

        try{
            if(classType){
                console.log('****');
                console.log(classType);
                let neasData = await Neas.find({'orbit_class': {$eq:classType}})
                //no funciona porque la clase esa la primera en mayuscula
                console.log(neasData);
            
            res.status(200).json(neasData.map((param)=> {
                return {
                    designation: param.designation,
                    discovery_date: param.discovery_date,
                    period_yr: param.period_yr
                }
            }))
            }   
            

        }catch(error){
            res.status(400).json({ error: error.message });
        }

    }
}

module.exports = neas