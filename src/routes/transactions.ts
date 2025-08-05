import { FastifyInstance } from 'fastify'
import { db } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await db('transactions').select('*')

    return transactions
  })
}
