const { request, response } = require('express')
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const jwtValidator = async (req = request, res = response, next) => {

    const token = req.header('x-cabe')

    if (!token) {
        return res.status(400).json({
            ok: false,
            msg: 'token is missing - token validator'
        })
    }

    try {

        const { uid, name } = jwt.verify(token, process.env.SECRET)

        req.uid = uid
        req.name = name

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'invalid token - token validator'
        })
    }

    next()
}

module.exports = {
    jwtValidator
}