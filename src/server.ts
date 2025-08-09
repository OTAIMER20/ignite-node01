import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

// Registro do plugin de cookies
app.register(cookie)

// Corrigido: prefixo com barra inicial
app.register(transactionsRoutes, {
  prefix: '/transactions',
})

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0', // necessário para aceitar conexões externas
  })
  .then(() => {
    console.log('HTTP Server is Running!')
  })
