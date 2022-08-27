const { response, request } = require('express')

const createUser = (req = request, res = response) => {

    const { name, password, email, ...body } = req.body

    return res.json({
        ok: true,
        msg: 'registry',
        name, password, email
    })
}

const loginUser = (req = request, res = response) => {

    const { password, email, ...body } = req.body

    return res.json({
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