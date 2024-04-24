const express= require('express')
const cors = require('cors');
const routes= require('./route.js')
const app= express()

app.use(cors()) //habilita interacao com o front end
app.use(express.json()) //habilita a leitura dos jsons
app.use(routes)


app.listen(3000,console.log('Servidor rodando'))
