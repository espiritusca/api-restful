const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com o banco de dados
db.connect()

// habilita CORS

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]

app.use(cors({
    origin: function(origin, callback) { // espera o retorno

        let allowed = true

        // mobile app
        if (!origin) allowed = true // se nao tiver origem é um app mobile instalado no celular do usuario

        if (!allowedOrigins.includes(origin)) allowed = false // NEGANDO a origem inclusa dentro da lista de origens permitidas (se nao tiver)

        callback(null , allowed) // null = mensagem padrao, retorno a mensagem e se permitiu ou nao (allowed = recebe algo)

    }
}))

// habilita server para receber dados json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))