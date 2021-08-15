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
                let neasData = await Neas.find(/*{'orbit_class': {$eq:classType}}*/)
                //no funciona porque la clase, primera letra en mayuscula
                let sameClass = neasData.map((param)=> {
                    let theClass = param.orbit_class
                    theClass = theClass.toLowerCase()
                    console.log(theClass);
                    let designation = param.designation
                    let period_yr = param.period_yr
                    if(theClass === classType){
                        return "Designation: "+ designation + "and the period= "+ period_yr
                    }

                })
            
                let filtered = sameClass.filter((param) => { return param != null })
                res.status(200).json(filtered)
            }else if(from || to){
                    let neasFilter;
                    if (from && to) {
                        from = from + '-01-01'
                        to = to + '12-31'
                        neasFilter = await Neas.find({ "discovery_date": { "$gte": from, "$lte": to } })
                    } else if (from === undefined && to) {
                        to = to + '-12-31'
                        neasFilter = await Neas.find({ 'discovery_date': { "$lte": to } })
                    } else if (to === undefined && from) {
                        from = from + '-01-01'
                        neasFilter = await Neas.find({ 'discovery_date': { "$gte": from } })
                    }
                    res.status(200).json(neasFilter.map(param => {
                        return {
                            designation: param.designation,
                            discovery_date: param.discovery_date,
                            period_yr: param.period_yr
                        }
                    }))
            }else{
                let neasData = await Neas.find()
                res.status(200).json(neasData)
            }  
            

        }catch(error){
            res.status(400).json({ error: error.message });
        }

    }
}

module.exports = neas