//crear la coneccion do DDBB mediante mongoose
//antes la haciamos sin mongoose
const mongoose = require("mongoose");
//no hace falta require('process')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connection to DB established"));

module.exports = mongoose;