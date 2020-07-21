const express = require('express');
const controller =require('../controllers/controller')
const routes = express.Router();


routes.all('/',function(req,res, next){
     req.app.locals.layout ='default';
        next();
})


routes.route('/')
        .get(controller.index)
       
routes.route('/login')
        .get(controller.getLogin)
        .post(controller.postLogin)

routes.route('/register')
        .get(controller.getRegister)
        .post(controller.postRegister)

        

        
module.exports = routes;