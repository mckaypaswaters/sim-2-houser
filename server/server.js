require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/house', ctrl.createHouse)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Bidoof for MVP ${SERVER_PORT}`))
})