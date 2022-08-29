const { response, request } = require('express')
const Event = require('../models/Event')

const getEvents = (req = request, res = response) => {

    res.json({
        ok: true,
        msg: 'Get events'
    })
}

const createEvent = async (req = request, res = response) => {

    const { title, notes, start, end } = req.body
    const user = req.uid

    const event = new Event({ title, notes, start, end, user })

    try {


        const savedEvent = await event.save()

        res.json({
            ok: true,
            savedEvent

        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'talk with the administrator'
        })

    }


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