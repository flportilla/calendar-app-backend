const { response, request } = require('express')
const User = require('../models/User')

const createUser = async (req = request, res = response) => {

    const { name, password, email, ...body } = req.body

    try {

        const user = new User({ name, password, email })
        await user.save()

        return res.status(201).json({
            ok: true,
            msg: 'registry',

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'please talk to the admin'
        })
    }
}

const loginUser = (req = request, res = response) => {

    const { password, email, ...body } = req.body

    return res.status(200).json({
        ok: true,
        msg: 'login',
        password, email
    })
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