const { model, Schema } = require('mongoose')

const EventSchema = new Schema({

    title: {
        type: String,
        required: [true, 'title is missing - schema']
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: [true, 'start date is missing - schema']
    },
    end: {
        type: Date,
        required: [true, 'end date is missing - schema']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user is missing - schema']
    }
})

EventSchema.methods.toJSON = function () {
    const { __v, _id, ...event } = this.toObject();
    event.id = _id
    return event
}
module.exports = model('Event', EventSchema)