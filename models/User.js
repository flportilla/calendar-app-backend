const { model, Schema } = require('mongoose')

const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name is missing - schema']
    },
    email: {
        type: String,
        required: [true, 'email is missing - schema'],
        unique: [true, 'email must be unique - schema']
    },
    password: {
        type: String,
        required: [true, 'password is missing - schema'],
    }

})

module.exports = model('User', UserSchema)