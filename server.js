const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

app.set("port", PORT)

app.get("/", (req,res)=>{
    res.send("Bienvenido a la API de Heros, aqui encontraras info sobre tu heroe favorito ")
})

app.listen(PORT, ()=>{
    console.log("Servidor corriendo en puerto: "+app.get('port')) 
})

