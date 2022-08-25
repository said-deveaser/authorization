const swaggerJSDoc = require('swagger-jsdoc')
const fs = require('fs')
const config = require('./config')

const swaggerDocs = swaggerJSDoc(config.swaggerOptions)
const json = JSON.stringify(swaggerDocs)

fs.writeFile(`${config.swaggerDir}/${config.jsonDocsFileName}`, json, function (err) {
  if (err) {
    console.log(err)
    process.exit(1)
  } else {
    console.log('swagger-docs.json generated')
    process.exit(0)
  }
})
