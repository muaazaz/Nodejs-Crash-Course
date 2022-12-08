const express = require ('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')
const blogroutes = require('./routes/blog')



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
app.use(blogroutes)



//Route Handlers
app.get('/',(req, res)=>{
    res.redirect('/blogs')
})

app.get('/about',(req, res)=>{
    res.render('about',{title: 'About'})
})
app.use((req,res)=>{
    res.render('404', {title: '404'})
})