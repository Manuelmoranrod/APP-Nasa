const express = require('express')
require("dotenv").config();
require('./utils/db');// DDBB con Mongoose
const process = require('process')

const apiRoutes = require('./routes/landings')
const routes = require('./routes/front-routes')

const app = express()
const port = process.env.PORT
//Motor de vista
app.set('view engine', 'pug');
app.set('views','./views');
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:false}))// para que?

//Endpoints permitidos
app.use('/api',apiRoutes)
app.use('/', routes)

app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");
})


app.listen(port, () => {
    console.log(`Nasa Landings app listening at http://localhost:${port}/`)
})