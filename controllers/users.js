let Users = require('../models/users')

const users = {
    register: async (req,res) => {
        try {
            let msj = 'Pagina de registro'
            res.status(200).render('register', { msj })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    createUser: async (req,res) => { 
        let user = new Users(req.body)
        try{
            const newUser = await user.save()
            //console.log(newUser); 

            let usersList = await Users.find()
            let data = [newUser, { 
                "allUsers": usersList
            }]
            res.status(201).render('register')

        } catch(error) {
            res.status(404).json({
                "error": error.message
            })
        }

    },
    getData: async (req, res)=> {
        let idNum = req.params.num
        console.log(idNum);
        let actualDate = new Date();
        let onlyYear = actualDate.getFullYear()
        try{
            let user = await Users.find({affiliatedNumber: {$eq:idNum}})
            let data_user = user.map((param)=> {
                let name = param.name
                let affiliatedNumber = param.affiliatedNumber
                let affiliatedDate = param.affiliationDate
                let occupation = param.occupation
                let points = param.astronomicalPoints
                let birthdate = param.birthdate
                //solo restan los años y no se tiene en cuenta los meses
                let date = birthdate.getFullYear()
                let years = onlyYear - date
                return "Num Affiliated: "+ affiliatedNumber+
                " with name "+name+ " has " +years+ " years old. Occupation: "+occupation+ " ,affiliated on "+affiliatedDate+" ,"+points+" points"
            })
            res.status(201).json(data_user)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },
    getNeas: async (req, res)=> {
        let idNum = req.params.num
        try{
            let user = await Users.find({affiliatedNumber: {$eq:idNum}})
            neas_user = user.map((param)=> {
                let affiliatedNumber = param.affiliatedNumber
                let userNeas = param.neasDiscovered
                return "Neas discovered by " + affiliatedNumber + " are " + userNeas
            })
            res.status(201).json(neas_user)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },
    getNecs: async (req, res)=> {
        let idNum = req.params.num
        try{
            let user = await Users.find({affiliatedNumber: {$eq:idNum}})
            necs_user = user.map((param)=> {
                let affiliatedNumber = param.affiliatedNumber
                let userNecs = param.necsDiscovered
                return "Necs discovered by " + affiliatedNumber + " are " + userNecs
            })
            res.status(201).json(necs_user)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },
    getPoints: async (req, res)=> {
        let idNum = req.params.num
        try{
            let user = await Users.find({affiliatedNumber: {$eq:idNum}})
            points_user = user.map((param)=> {
                let affiliatedNumber = param.affiliatedNumber
                let userPoints = param.astronomicalPoints
                return "Points of " + affiliatedNumber + " are: " + userPoints
            })
            res.status(201).json(points_user)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },
    modifyNick: async (req,res)=> {
        let idNum = req.params.num
        let modify = req.body
        try{
            const user = await Users.findOneAndUpdate({affiliatedNumber: {$eq:idNum}}, modify)
            res.status(201).send(user)
        } catch(error){
            res.status(400).json({
                "error": error.message
            })
        }
    },
    deleteTrue: async (req,res)=>{
        let idNum = req.params.num
        let modify = req.body
        try{
            const user = await Users.findOneAndUpdate({affiliatedNumber: {$eq:idNum}}, modify)
            res.status(201).send(user)
        } catch(error){
            res.status(400).json({
                "error": error.message
            })
        }
    },
    deleteUser: async (req,res)=>{
        let idNum = req.params.num
        try{
            const user = await Users.findOneAndRemove({affiliatedNumber: {$eq:idNum}},)
            res.status(201).send(user)
        } catch(error){
            res.status(400).json({
                "error": error.message
            })
        }
    },

}

module.exports = users
