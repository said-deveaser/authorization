import express from 'express'
import swaggerRouter from '~/swagger/swagger'

const app = express()

app.use('/api-docs', swaggerRouter)

/**
 * @swagger
 * /:
 *  get:
 *    description: Hello world
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/', (req, res) => {
  res.send('Hello world')
})

export default app
