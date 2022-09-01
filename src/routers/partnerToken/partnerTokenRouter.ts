import { Router } from 'express'
import { PartnerToken } from '~/Models/PartnerToken'

export const partnerTokenRouter = Router()

/**
 * @swagger
 * /api/partners-tokens/all:
 *  get:
 *    description: Returns all tokens
 *    responses:
 *      '200':
 *        description: A successful response
 */
partnerTokenRouter.get('/all', (req, res) => {
  PartnerToken.select()
    .query()
    .then(queryResponse => {
      res.send(JSON.stringify(queryResponse.rows, null, 4))
    })
})

/**
 * @swagger
 * /api/partners-tokens:
 *  post:
 *    summary: Create a JSONPlaceholder user.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              date_expired:
 *                type: string
 *                description: Время, когда токен перестает действовать
 *                example: '2022-09-15'
 *              partner_name:
 *                type: string
 *                description: Имя партнера, которому предоставляется токен
 *                example: 'MyBuh.kz'
 *    responses:
 *      '200':
 *        description: A successful response
 */
partnerTokenRouter.post('/', (req, res) => {
  res.send(JSON.stringify(req.body))
})
