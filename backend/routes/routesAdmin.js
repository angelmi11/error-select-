const express = require('express');
const controllerAdmin = require('../controllers/controllerAdmin')
const router = express.Router();

router.all('/*',function(req,res, next){
        req.app.locals.layout ='admin';
        next();
})


router.route('/')
        .get(controllerAdmin.index)


router.route('/posts')
        .get(controllerAdmin.getPosts)
        


router.route('/posts/create')
    .get(controllerAdmin.createPostsget)
    .post(controllerAdmin.submitPosts)

router.route('/posts/edit/:id')
        .get(controllerAdmin.editPost);
        
 
module.exports=router;