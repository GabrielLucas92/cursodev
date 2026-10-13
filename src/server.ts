import fastify from 'fastify'

import "dotenv/config"

import { clear } from 'node:console'

const app= fastify()

app.get('/hello2', async (request, reply)=>{
    return { msg: 'oiiiii'}
})
app.listen({port:Number(process.env.PORT)}).then(()=>{
    console.log('Rodando na porta:' + process.env.PORT)
})