import { Client } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export const dbConfig = {
  ip: process.env.DB_IP ?? 'localhost',
  port: process.env.DB_PORT ?? 5432,
  dbName: process.env.DB_NAME ?? 'buh',
  username: process.env.DB_USERNAME ?? 'postgres',
  userPassword: process.env.DB_PASSWORD ?? '77754950Said',
  schema: 'auth',
}

export const client = new Client({
  port: dbConfig.port as number,
  host: dbConfig.ip,
  user: dbConfig.username,
  password: dbConfig.userPassword,
  database: dbConfig.dbName,
})
const createSchema = async (): Promise<any> => {
  return await client
    .query(
      `CREATE SCHEMA ${dbConfig.schema} 
    AUTHORIZATION ${dbConfig.username};`
    )
    .then(queryResponse => {
      console.log('SCHEMA CREATED')
    })
    .catch(err => {
      console.error('FAILED SCHEMA:', err)
      process.exit(1)
    })
}
const createTokensTable = async (): Promise<any> => {
  return await client
    .query(
      `
CREATE TABLE ${dbConfig.schema}.partners_tokens
(
    partner_token_id integer NOT NULL,
    token text NOT NULL,
    date_created date NOT NULL,
    date_expired date NOT NULL,
    partner_name character varying(256) NOT NULL,
    partner_id integer,
    CONSTRAINT pk_partner_token_id PRIMARY KEY (partner_token_id)
);

ALTER TABLE IF EXISTS ${dbConfig.schema}.partners_tokens
    OWNER to ${dbConfig.username};
  `
    )
    .then(() => {
      console.log('partners_tokens Table created!')
    })
    .catch(e => {
      console.error('FAILED CREATE TABLE partners_tokens', e)
      process.exit(1)
    })
}

const connect = async (): Promise<any> => {
  return await client
    .connect()
    .then(() => {
      console.log('CLIENT CONNECTED')
    })
    .catch(e => {
      console.error('CLIENT connection error')
      process.exit(1)
    })
}

console.log('started')

const run = async (): Promise<void> => {
  await connect()
  await createSchema()
  await createTokensTable()
  await client.end()
}
run().finally(() => {
  process.exit(0)
})
