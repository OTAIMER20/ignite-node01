// src/app.ts
import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

// Registro do plugin de cookies
app.register(cookie)

// Registro das rotas com o prefixo correto
app.register(transactionsRoutes, {
  prefix: '/transactions',
})
