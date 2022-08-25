import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import * as fs from 'fs'

const swaggerRouter = Router()

try {
  const swaggerConfig = fs.readFileSync('swagger/swagger-docs.json')
  swaggerRouter.use('/', swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerConfig.toString())))
} catch (err) {
  console.error('swagger config not found')
}

export default swaggerRouter
