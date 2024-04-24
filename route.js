const express= require("express")
const route= express.Router()
const controller= require('./Controllers/CroudController')
const cors = require('cors');

route.post('/inserir',controller.Post)
route.get('/Dados',controller.get)
route.put('/Alterar/:Nome',controller.Put)
route.delete('/Delete/:Nome', controller.delete)

module.exports=route