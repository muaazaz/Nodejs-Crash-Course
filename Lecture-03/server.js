const http = require('http')
const fs = require('fs')



const server = http.createServer((req, res) => {
    // console.log(req.url, req.method )
    res.setHeader('Content-Type', 'text/html')

    // res.write('<head><link rel="stylesheet href="#"></head>')
    // res.write('<p>Hellow</p>')
    // res.write('<p>World</p>')
    // res.end()

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        //redirecting user to about
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    //Sending an html file as a response to a request
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Server started on port 3000')
})