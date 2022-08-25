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
