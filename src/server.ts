import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'
import { env } from './env'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions', // prefixo para todas as rotas
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
