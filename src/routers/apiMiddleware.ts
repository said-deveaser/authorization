import { json, Router } from 'express'
import { partnerTokenRouter } from '~/routers/partnerToken/partnerTokenRouter'

export const apiMiddlewareRouter = Router()

apiMiddlewareRouter.use(json())
apiMiddlewareRouter.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

apiMiddlewareRouter.use('/partners-tokens', partnerTokenRouter)
