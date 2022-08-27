const credentialsValidator = require('../middlewares/credentials-validator')
const fieldValidator = require('../middlewares/field-validator')

module.exports = {
    ...credentialsValidator,
    ...fieldValidator
}