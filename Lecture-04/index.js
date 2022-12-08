const lodash = require('lodash')
const num = require('./loadash')

//Allow only one call to the function
const numgen = lodash.once(()=>{ 
    console.log(num())
})

numgen()
numgen()
numgen()