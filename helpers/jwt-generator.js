require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

//Generate a JWT
const tokenGenerator = (uid = '', name = '') => {

    return new Promise((resolve, reject) => {
        const payload = { uid, name }

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: '2h'
        }, (error, token) => {

            if (error) {
                console.log(error)
                reject("It wasn't possible to generate the token - token generator");
            }
            else {
                resolve(token)
            }
        })
    })
}

module.exports = {
    tokenGenerator
}