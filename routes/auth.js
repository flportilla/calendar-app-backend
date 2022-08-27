/* 
    user routes / auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator')

const { createUser, renewToken, loginUser } = require('../controllers/auth');

const { fieldValidator } = require('../middlewares/field-validator');

const { isEmailDuplicated } = require('../helpers/db-validator');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'name is missing').notEmpty(),
        check('email', 'email is missing').isEmail(),
        check('email').custom(isEmailDuplicated),
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