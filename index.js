const express = require('express');
require('dotenv').config()
const cors = require('cors')

const { dbConnect } = require('./db/config');

const app = express();

//cors config
app.use(cors())

//public path
app.use(express.static('public'))

//db
dbConnect(process.env.MONGO_URI)

//middlewares
app.use(express.json())

//routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

//Handles all routes
app.use('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//listening requests
app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`)
})