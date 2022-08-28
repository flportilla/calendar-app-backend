const credentialsValidator = require('../middlewares/credentials-validator')
const fieldValidator = require('../middlewares/field-validator')
const jwtValidator = require('../middlewares/jwt-validator')

module.exports = {
    ...credentialsValidator,
    ...fieldValidator,
    ...jwtValidator
}