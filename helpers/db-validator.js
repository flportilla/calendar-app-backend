const { Types } = require('mongoose')
const User = require('../models/User')
const Event = require('../models/Event')

//Search for duplicated emails
const isEmailDuplicated = async (email = '') => {

    const user = await User.findOne({ email })

    if (user) {
        throw new Error('Email already in use')
    }
}

const isExistingEvent = async (id = '', { req }) => {

    if (!Types.ObjectId.isValid(id)) {
        throw new Error(`This isn't a valid Mongoose ID`);
    }

    const existingEvent = await Event.findById(id)
    if (!existingEvent) {
        throw new Error(`The event with the id: ${id} doesn't exist on DB`)
    }

    req.event = existingEvent
}

module.exports = {
    isEmailDuplicated,
    isExistingEvent
}
