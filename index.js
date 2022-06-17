'use strict'
import express from 'express'
import routes from './src/routes/index.js';
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const app = express()
const port = process.env.PORT ?? 8080
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Supermercado SQ',
            version: '1.0.0',
            description: "Documentação para utilização da API \"Supermercado SQ\"."
        },
        host: `http://localhost:${port}`,
        basepath: '/',
        tags: [
            {
                name: 'usuarios',
                description: 'Tudo sobre nossos usuários'
            },
            {
                name: 'produtos',
                description: 'Tudo sobre nossos produtos'
            },
            {
                name: 'comentarios',
                description: 'Tudo sobre os comentários realizados no site'
            },
        ],
        schemes: 
        - 'http'
    },
    apis: ['./src/**/*-routes.js']
}
const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
    console.log('Server running on port 3000')
})