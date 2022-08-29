const { response, request } = require('express')
const Event = require('../models/Event')

const getEvents = async (req = request, res = response) => {

    const events = await Event.find().populate('user', 'name')

    res.json({
        ok: true,
        events
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

const updateEvent = async (req = request, res = response) => {

    const eventId = req.params.id

    const originalUser = req.event.user.toString()

    const uid = req.uid
    const { title, notes, start, end } = req.body

    if (originalUser !== uid) {
        return res.status(401).json({
            ok: false,
            msg: "Unauthorized, different user"
        })
    }

    try {

        const event = await Event
            .findByIdAndUpdate(
                eventId,
                { title, notes, start, end, uid },
                { new: true }
            )

        res.json({
            ok: true,
            event
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Talk to the administrator',
        })
    }
}

const deleteEvent = async (req = request, res = response) => {

    const eventId = req.params.id
    const originalUser = req.event.user.toString()
    const uid = req.uid

    if (originalUser !== uid) {
        return res.status(401).json({
            ok: false,
            msg: "Unauthorized, different user"
        })
    }

    try {

        await Event.findByIdAndDelete(eventId)
        return res.status(204).json({
            ok: true
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Talk to the administrator'
        })
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
}