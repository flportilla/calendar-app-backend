const { response, request } = require('express')
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { tokenGenerator } = require('../helpers/jwt-generator');

const createUser = async (req = request, res = response) => {

    const { name, password, email, ...body } = req.body

    try {

        const user = new User({ name, password, email })

        const salt = bcrypt.genSaltSync() //(10) by default        
        user.password = bcrypt.hashSync(password, salt)

        await user.save()

        const token = await tokenGenerator(user.id, user.name)

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
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

        const token = await tokenGenerator(user.id, user.name)

        res.json({
            ok: true,
            msg: 'succesfully logged in',
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'please talk to the admin'
        })
    }
}

const renewToken = async (req = request, res = response) => {

    const { uid, name } = req

    const token = await tokenGenerator(uid, name)

    return res.json({
        ok: true,
        uid,
        name,
        token
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
}