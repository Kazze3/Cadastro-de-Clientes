const express= require('express')
const Croudcontroler = require('./controllers/CrudController.js')

const route= express.Router()

route.post('/inserir', Croudcontroler.Post);
route.get('/grupo', Croudcontroler.get)
route.delete('/delete/:Email',Croudcontroler.delete)
route.put('/Alterar/:Email',Croudcontroler.Put)
module.exports= route