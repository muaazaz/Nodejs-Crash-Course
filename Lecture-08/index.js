const express = require ('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')



const app = express()

//Connect to mongodb
const DBURL = 'mongodb+srv://muaaz:mongodb@node-course.h5vuzva.mongodb.net/node-course?retryWrites=true&w=majority'
mongoose.connect(DBURL).then((result)=>{
    app.listen(3000,()=>{
        console.log('Server Is Up And Running On Port: 3000')
    })
}).catch((err)=>{
    console.log(err)
})


//View Engines 
app.set('view engine', 'ejs')

//middleware and static files:
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



//Route Handlers
app.get('/',(req, res)=>{
    res.redirect('/blogs')
})

app.get('/about',(req, res)=>{
    res.render('about',{title: 'About'})
})

//Blogs routes
app.get('/blogs',(req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: 'All the Blogs', blogs:result})
    }).catch((err)=>{
        console.log(err)
    })
})
//New blog
app.post('/blogs',(req, res)=>{
    const blog = new Blog(req.body)
    blog.save().then((result)=>{
        res.redirect('/blogs')
    }).catch((err)=>{
        console.log(err)
    })
})
//Blogs creating page
app.get('/blogs/create',(req,res)=>{
    res.render('create', {title:'Create A blog'})
})

//Blogs getting using its id
app.get('/blogs/:id',(req, res)=>{
    Blog.findById(req.params.id)
    .then((result)=>{
        res.render('details',{blog: result, title: 'Blog Details'})
    }).catch((err)=>{
        console.log(err)
    })
})

//Deleting the blog
app.delete('/blogs/:id',(req, res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({redirect: '/blogs'})
    }).catch((err)=>{
        console.log(err)
    })
})

app.use((req,res)=>{
    res.render('404', {title: '404'})
})


//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res)=>{
//     const blog = new Blog({
//         title: 'new Blog 2',
//         snippet: 'About my new blog',
//         body:'more about my new blog'
//     })
//     blog.save().then((results)=>{
//         res.send(results)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// app.get('/all-blogs',(req, res)=>{
//     Blog.find().then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     }) 
// })
// app.get('single-blog', (req,res)=>{
//     Blog.findById('639195c945a89b1ebe19eea3').then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })