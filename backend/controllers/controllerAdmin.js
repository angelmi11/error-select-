const Post = require('../models/postModule').Post;

module.exports = {
    index: function (req, res) {
        res.render('admin/index');
    },


    getPosts: (req, res) => {
        Post.find().lean().then(posts => {
             res.render('admin/posts/index',{posts: posts});
        });

    },


    createPostsget: (req, res) => {
        res.render("admin/posts/create")
    },

    submitPosts: (req, res) => {
         const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
          
        });

        newPost.save().then(post => {
            req.flash('success-message', 'Post created successfully.');
            res.redirect('/admin/posts');
        });
    },

  
    editPost:(req, res) => {
        const id = req.params.id;

        Post.findById(id)
            .then(post => {

                    res.render('admin/posts/edit', {post: post});
                });


            
    },




}