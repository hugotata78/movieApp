//importando librerías
const express = require('express');
const app = express()
const cors = require('cors')

app.set('PORT', process.env.PORT || 3001)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/',(require('./routes/index')))

app.listen(app.get('PORT'),()=>{
    console.log(`App running on port ${app.get('PORT')}`)
})