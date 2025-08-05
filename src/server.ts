import fastify from 'fastify'
import { db } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await db('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server is Running!')
  })
