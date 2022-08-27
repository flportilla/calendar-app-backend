const express = require('express')
require('dotenv').config()

const app = express();

//public path
app.use(express.static('public'))

//middlewares
app.use(express.json())

//routes
app.use('/api/auth', require('./routes/auth'))


//middlewares

//listening requests
app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`)
})