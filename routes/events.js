/* 
    events routes 
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const { fieldValidator, jwtValidator } = require('../middlewares');

const router = Router();

//Get events
router.get(
    '/',
    [
        jwtValidator,
        fieldValidator
    ],
    getEvents)

//Create event
router.post(
    '/',
    [
        jwtValidator,
        fieldValidator
    ],
    createEvent)

//Update events
router.put(
    '/:id',
    [
        jwtValidator,
        fieldValidator
    ],
    updateEvent)

//Delete events
router.delete(
    '/:id',
    [
        jwtValidator,
        fieldValidator
    ],
    deleteEvent)

module.exports = router