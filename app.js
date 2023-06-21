require("dotenv").config()

const express = require('express')  //Libreria de express
const cors = require('cors') //libreria de cors
const dbConnect = require('./config/mongo') //llamado de la funcion 
const app =express()

app.use(cors())
app.use(express.json()) // para enviar datos a la db
app.use(express.static("storage")) //recursos estaticos o public se sacan de la carpeta storage


const port = process.env.PORT || 3000

/**
 * Aqui invocamos a las rutas!! 
**/
//TODO localhost/api/_________
app.use("/api",require("./routes"))




app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()
