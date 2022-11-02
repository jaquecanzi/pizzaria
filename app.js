let express = require('express')

const servidor = express()

servidor.get('/usuarios', (req, res) => {
    console.log('Chegou uma nova requisição')
    res.send('Vou te mandar uma lista de usuários')
})

servidor.listen(3001)