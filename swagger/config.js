const config = {
  jsonDocsFileName: 'swagger-docs.json',
  swaggerDir: './swagger'
}
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: ['http://localhost:3000'],
    },
  },
  // replace to your router files, like 'api/*Router.ts'
  apis: ['src/**/*.[tj]s'],
}

module.exports = {
  ...config,
  swaggerOptions,
}
