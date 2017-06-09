'use strict'

const events = require('./events')
const api = require('./api')

const getUsersNotes = function () {
  // console.log('getUsersNotes called')
  api.retrieveUserNotes()
    .then((events.getUserNotesSuccess))
    .catch(events.getUserNotesFailure)
}

module.exports = {
  getUsersNotes
}
