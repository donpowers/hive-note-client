'use strict'

const store = require('../store')
const noteListTemplate = require('../templates/note-list.handlebars')

const getUserNotesSuccess = (data) => {
  console.log('getUserNotesSuccess success', data)
  store.notes = data.notes
  console.log('data.notes success', data.notes)
  const showNoteListTemplate = noteListTemplate({ notes: data.notes })
  $('.userNotes').append(showNoteListTemplate)
}

const getUserNotesFailure = (error) => {
  console.log('getUserNotesFailure failure', error)
  console.error(error)
}

module.exports = {
  getUserNotesSuccess,
  getUserNotesFailure
}
