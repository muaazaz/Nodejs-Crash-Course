const fs = require ('fs')

//Encoding make chunks in readable format
const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data',(chunk)=>{
//     console.log('\n____________New Chunk___________\n')
//     console.log(chunk)
//     writeStream.write('\nNew Chunk\n')
//     writeStream.write(chunk)
// })

//piping________Above code replacement
readStream.pipe(writeStream)