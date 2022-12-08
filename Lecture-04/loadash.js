const lodash = require('lodash')



function rndomgen() {
    const num = lodash.random(0, 20)
    return num
}



module.exports = rndomgen