/* 
    events routes 
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const { fieldValidator, jwtValidator } = require('../middlewares');

const router = Router();

//If a middleware is used by all requests, it is easier to put it here
//The position of the middleware indicates that everything below this line will use it
router.use(jwtValidator)

//Get events
router.get(
    '/',
    getEvents)

//Create event
router.post(
    '/',
    createEvent)

//Update events
router.put(
    '/:id',
    updateEvent)

//Delete events
router.delete(
    '/:id',
    deleteEvent)

module.exports = router