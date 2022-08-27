const User = require('../models/User')


const isEmailDuplicated = async (email = '') => {

    const user = await User.findOne({ email })

    if (user) {
        throw new Error('Email already in use')
    }
}

module.exports = {
    isEmailDuplicated
}
