import { Model } from '~/pgWizard/src'
import { pool } from '~/db/pool'
import { IPartnerToken } from '~/interfaces/Models'

export const PartnerToken = new Model<IPartnerToken>(pool, {
  columns: [
    'partner_token_id',
    'token',
    'date_created',
    'date_expired',
    'partner_name',
    'partner_id',
  ],
  schemaName: 'auth',
  tableName: 'partners_tokens',
})
