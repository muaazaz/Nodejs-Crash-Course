const express = require('express')
const constroller = require('../controllers/blog')

const router = new express.Router()

//Blogs routes
//Getting all the blogs 
router.get('/blogs', constroller.blog_index)

//Creating a new blog
router.post('/blogs',constroller.blog_create)

//Blogs creating page
router.get('/blogs/create',constroller.blog_create_get)

//Blogs getting using its id
router.get('/blogs/:id',constroller.blog_details)

//Deleting the blog
router.delete('/blogs/:id',constroller.blog_delete)


module.exports = router