import { Client, Pool } from 'pg'
import { dbConfig } from '~/db/config'

export const client = new Client({
  port: dbConfig.port as number,
  host: dbConfig.ip,
  user: dbConfig.username,
  password: dbConfig.userPassword,
  database: dbConfig.dbName,
})
export const pool = new Pool({
  port: dbConfig.port as number,
  host: dbConfig.ip,
  user: dbConfig.username,
  password: dbConfig.userPassword,
  database: dbConfig.dbName,
})
