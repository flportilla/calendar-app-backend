const { model, Schema } = require('mongoose')

const UserSchema = new Schema({

    name: {
        type: String,
        require: [true, 'name is missing - schema']
    },
    email: {
        type: String,
        require: [true, 'email is missing - schema'],
        unique: [true, 'email must be unique - schema']
    },
    password: {
        type: String,
        require: [true, 'password is missing - schema'],
    }

})

module.exports = model('User', UserSchema)