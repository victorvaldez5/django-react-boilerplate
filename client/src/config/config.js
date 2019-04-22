const path = require('path')

if(process.env.NODE_ENV === 'test') {
  const path = path.resolve(process.cwd(), '..', '.env.test')
} else if (process.env.NODE_ENV === 'production') {
  const path = path.resolve(process.cwd(), '..', '.env.production')
} else {
  const paht = path.resolve(process.cwd(), '..', '.env')
}

module.exports = require('dotenv').config({path: path})