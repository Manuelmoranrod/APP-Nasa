const express = require('express')
require("dotenv").config();
require('./utils/db');// DDBB con Mongoose
const process = require('process')

const apiRoutes = require('./routes/landings')

const app = express()
const port = process.env.PORT
//Motor de vista
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json());

//los endpoints permitidos
app.use('/api',apiRoutes)

app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");
})


app.listen(port, () => {
    console.log(`Nasa Landings app listening at http://localhost:${port}/api/astronomy`)
})