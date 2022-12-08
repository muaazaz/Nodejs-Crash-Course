const Blog = require('../models/blogs')

//Getting all the blogs controller
const blog_index = (req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: 'All the Blogs', blogs:result})
    }).catch((err)=>{
        console.log(err)
    })
}
//Create blog controller
const blog_create = (req, res)=>{
    const blog = new Blog(req.body)
    blog.save().then(()=>{
        res.redirect('/blogs')
    }).catch((err)=>{
        console.log(err)
    })
}
//Create blog page controller
const blog_create_get =(req,res)=>{
    res.render('create', {title:'Create A blog'})
}
//Getting blog using its id
const blog_details = (req, res)=>{
    Blog.findById(req.params.id)
    .then((result)=>{
        res.render('details',{blog: result, title: 'Blog Details'})
    }).catch((err)=>{
        res.render('404', {title: '404'})
    })
}
//Deleting a blog
const blog_delete = (req, res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({redirect: '/blogs'})
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports ={
    blog_index,
    blog_create,
    blog_create_get,
    blog_details,
    blog_delete
}