const fs = require('fs')

// fs.readFile('./docs/blog1.txt',(err, res)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(res.toString())
// })

// console.log('Last line of code')

// fs.writeFile('./docs/blog2.txt','Hello new file',(err, res)=>{
//     // console.log('File was created and written')
// })
if(!fs.existsSync('./assets')){
    fs.mkdir('assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('Folder created')
    })
}
else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('Deleted Folder')
    })
}

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('File deleted')
    })
}