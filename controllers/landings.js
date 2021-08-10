
const Landings = require('../models/landings')

const landings = {
    getLanded: async (req, res)=> {
        let landed;
        let minimum_mass =  await req.query.minimum_mass
        //console.log(minimum_mass);

        try{
            //te traes toda la DB
            landed = await Landings.find()
            //obtienes mass y name
            let getmass = landed.map((e) => {
                let mass = parseInt(e.mass)
                let name = e.name
                //console.log(mass);
                if(mass >= minimum_mass){
                    return "Name: " + name + " & mass: " + mass
                }
            })
            //filtrar undefinded
            let final = getmass.filter((e) => { return e != null })
            console.log(final);
            //console.log(landed);
            res.status(200).json({ final });

        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    sameMass: async (req, res) => {
        try{
            let mass = req.params.mass
            console.log(mass);
            //filtrar en Db el que cumpla la condicion
            let byMass = await Landings.find().filter(meteorite => meteorite.mass.value)
            //console.log(m);
            
            res.status(200).json({ byMass });

        }catch(error){
            res.status(400).json({ error: error.message });
        }

    },
    classType: async (req, res) => {
        try{
            let classType = req.params.class
            console.log(classType);
            res.status(200).json({  });

        }catch(error){
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = landings

