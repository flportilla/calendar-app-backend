const { response, request } = require('express')
const bcrypt = require('bcryptjs');

const User = require('../models/User')

const createUser = async (req = request, res = response) => {

    const { name, password, email, ...body } = req.body

    try {

        const user = new User({ name, password, email })

        const salt = bcrypt.genSaltSync() //(10) by default        
        user.password = bcrypt.hashSync(password, salt)

        await user.save()

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'please talk to the admin'
        })
    }
}

const loginUser = async (req = request, res = response) => {

    const { password, email, ...body } = req.body
    const user = req.user

    try {
        res.json({
            ok: true,
            uid: user.id,
            name: user.name
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'please talk to the admin'
        })
    }
}

const renewToken = (req = request, res = response) => {
    return res.json({
        msg: 'renew'
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}