const { response, request } = require('express')

const getEvents = (req = request, res = response) => {

    res.json({
        ok: true,
        msg: 'Get events'
    })
}

const createEvent = (req = request, res = response) => {

    res.json({
        ok: true,
        msg: 'Create events'
    })
}

const updateEvent = (req = request, res = response) => {

    res.json({
        ok: true,
        msg: 'Update events'
    })
}

const deleteEvent = (req = request, res = response) => {

    res.json({
        ok: true,
        msg: 'Delete events'
    })
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
}