import knex from 'knex'
import type { Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? { filename: String(env.DATABASE_URL) } // garante string
      : env.DATABASE_URL,
  useNullAsDefault: env.DATABASE_CLIENT === 'sqlite',
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const db = knex(config)
