const moment = require("moment")


const isDate = (date = '') => {

    if (!date) {
        return false
    }

    const validDate = moment(date)
    if (validDate.isValid()) {
        return true
    }

}

module.exports = { isDate }