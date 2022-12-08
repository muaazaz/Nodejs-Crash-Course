const express = require ('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

//Connect to mongodb
const DBURL = 'mongodb+srv://muaaz:mongodb@node-course.h5vuzva.mongodb.net/node-course?retryWrites=true&w=majority'
mongoose.connect(DBURL).then((result)=>{
    app.listen(4000,()=>{
        console.log('Server Is Up And Running On Port: 4000')
    })
}).catch((err)=>{
    console.log(err)
})

app.set('view engine', 'ejs')



// app.use(morgan('tiny'));
// app.use(morgan('dev'))

//middleware and static files:

app.use(express.static('public'))

// app.get('/',(req, res)=>{
//     // res.send('<p>Home Page</p>');
//     res.sendFile('./views/index.html',{root:__dirname})
// })

// app.get('/about',(req, res)=>{
//     // res.send('<p>About Page</p>');
//     res.sendFile('./views/about.html',{root: __dirname})
// })
// //redirects
// app.get('/about-me', (req, res)=>{
//     res.redirect('/about')
// })

// //404 page
// app.use((req, res)=>{
//     res.sendFile('./views/404.html',{root: __dirname})
// })

app.get('/',(req, res)=>{
    const blogs = [
        
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veniam dignissimos deserunt voluptatibus fuga quidem. Nulla reprehenderit, quaerat quos, sunt quibusdam voluptatibus laborum accusantium reiciendis rerum deserunt excepturi modi veritatis!'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veniam dignissimos deserunt voluptatibus fuga quidem. Nulla reprehenderit, quaerat quos, sunt quibusdam voluptatibus laborum accusantium reiciendis rerum deserunt excepturi modi veritatis!'},
        {title: 'How to defeat bowser', snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veniam dignissimos deserunt voluptatibus fuga quidem. Nulla reprehenderit, quaerat quos, sunt quibusdam voluptatibus laborum accusantium reiciendis rerum deserunt excepturi modi veritatis!'}

    ]
    res.render('index',{title: 'Home', blogs})
})

app.get('/about',(req, res)=>{
    res.render('about',{title: 'About'})
})

app.get('/blogs/create',(req,res)=>{
    res.render('create', {title:'Create A blog'})
})

app.use((req,res)=>{
    res.render('404', {title: '404'})
})