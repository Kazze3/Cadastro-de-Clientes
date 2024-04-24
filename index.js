const express= require('express')
const cors = require('cors');
const routes= require('./route.js')
const app= express()

app.use(express.json())
app.use(routes)
app.use(cors({
    origin: 'file:///C:/Users/Bruno/Desktop/CRUD/template/Home.html'
}));


app.listen(3000,console.log('Servidor rodando'))