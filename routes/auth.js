/* 
    user routes / auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator')

const { createUser, renewToken, loginUser } = require('../controllers/auth');

const { fieldValidator } = require('../controllers/middlewares/field-validator');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'name is missing').notEmpty(),
        check('email', 'email is missing').isEmail(),
        check('password', 'password must be at least 6 characters long').isLength({ min: 6 }),
        fieldValidator
    ],
    createUser)

router.post(
    '/',
    [
        check('email', 'email is missing').isEmail(),
        check('password', 'password must be at least 6 characters long').isLength({ min: 6 }),
        fieldValidator
    ],
    loginUser)

router.get('/renew', renewToken)

module.exports = router