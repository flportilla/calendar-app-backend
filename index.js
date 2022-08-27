const express = require('express');
require('dotenv').config()

const { dbConnect } = require('./db/config');

const app = express();

//public path
app.use(express.static('public'))

//db
dbConnect(process.env.MONGO_URI)

//middlewares
app.use(express.json())

//routes
app.use('/api/auth', require('./routes/auth'))

//listening requests
app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`)
})