let Users = require('../models/users')

const users = {
    createUser: async (req,res) => { 
        let user = new Users(req.body)
        try{
            const newUser = await user.save()
            //console.log(newUser); 

            let usersList = await Users.find()
            let data = [newUser, { 
                "allUsers": usersList
            }]
            res.status(201).json(data)

        } catch(error) {
            res.status(404).json({
                "error": error.message
            })
        }

    },
    getData: async (req, res)=> {
        idNum = req.params.num
        console.log(idNum);
        let actualDate = new Date();
        let onlyYear = actualDate.getFullYear()
        try{
            let users = await Users.find({affiliatedNumber: {$eq:idNum}})
            
        
            res.status(201).json(users)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },
    getNeas: async (req, res)=> {
        idNum = req.params.num
        console.log(idNum);
        let actualDate = new Date();
        let onlyYear = actualDate.getFullYear()
        try{
            let users = await Users.find({affiliatedNumber: {$eq:idNum}})
            
        
            res.status(201).json(users)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },
    getNecs: async (req, res)=> {
        idNum = req.params.num
        console.log(idNum);
        let actualDate = new Date();
        let onlyYear = actualDate.getFullYear()
        try{
            let users = await Users.find({affiliatedNumber: {$eq:idNum}})
            
        
            res.status(201).json(users)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },
    getPoints: async (req, res)=> {
        idNum = req.params.num
        console.log(idNum);
        let actualDate = new Date();
        let onlyYear = actualDate.getFullYear()
        try{
            let users = await Users.find({affiliatedNumber: {$eq:idNum}})
            
        
            res.status(201).json(users)

        } catch(error) {
            res.status(400).json({
                "error": error.message
            })
        }
    },

}

module.exports = users