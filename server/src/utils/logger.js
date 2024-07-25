const getLogger = require('loglevel-colored-level-prefix')
const options = {prefix: 'Agri Mitra', level: 'trace'}
const logger = getLogger(options)

module.exports={logger}
