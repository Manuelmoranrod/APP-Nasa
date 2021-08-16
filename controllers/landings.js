const Landings = require('../models/landings')

const landings = {
    getLanded: async (req, res)=> {
        let landed;
        let minimum_mass =  await req.query.minimum_mass
        let from = req.query.from
        let to = req.query.to

        try{
            //separamos por las querys que entran
            if(minimum_mass){
                console.log(minimum_mass);
                landed = await Landings.find({'mass': {$gte:minimum_mass}})
                //obtienes mass pero no funciona
                //console.log(landed);

            }else if(from || to){
                console.log(from);
                landed = await Landings.find({year: {$gte:from}})
                console.log(to);
                landed = await Landings.find({year: {$lte:to}})

            }else{
                landed = await Landings.find()
            }
            
            res.status(200).json({ landed });

        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    sameMass: async (req, res) => {
        try{
            let massGive = req.params.mass
            //console.log(massGive);
            //filtrar en Db el que cumpla la condicion
            let byMass = await Landings.find({mass: {$eq:massGive}})
            //en el find ya hacemos una especie de filter con $eq(que sea igual)
            //console.log(byMass);
            
            res.status(200).json({ byMass });

        }catch(error){
            res.status(400).json({ error: error.message });
        }

    },
    classType: async (req, res) => {
        try{
            let classType = req.params.class
            let byClass = await Landings.find({recclass: {$eq:classType}})
            res.status(200).json({ byClass });

        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    byDate: async (req, res)=> {
        let landed
        //me esta entrando por la primera ruta, porque hasta landings es igual
        let from = await req.query.from
        let to = await req.query.to
        console.log(from);
        console.log(to)
        try{
            landed = await Landings.find()

            res.status(200).json({ landed });
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = landings

