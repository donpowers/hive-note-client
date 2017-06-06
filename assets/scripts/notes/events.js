'use strict'

const store = require('../store')
const noteListTemplate = require('../templates/note-list.handlebars')
const note = require('./note')
const api = require('./api')

const getUserNotesSuccess = (data) => {
  console.log('getUserNotesSuccess success', data)
  store.notes = data.notes
  console.log('data.notes success', data.notes)
  const showNoteListTemplate = noteListTemplate({ notes: data.notes })
  $('.userNotes').empty()
  $('.userNotes').append(showNoteListTemplate)
  // Add the event for delete to the class name for the delete button
  // when it gets called parse the ID from the button name
  // that was added in the handlebars template
  $('.delete-note').on('click', function (event) {
    event.preventDefault()
    const data = event.target.id.split('-')
    // console.log('Delete Note ID: ', data[2])
    api.onDeleteNote(data[2])
      .then(onDeleteSurveySuccess)
      .catch(onDeleteSurveyFailure)
  })
}
const onDeleteSurveySuccess = function () {
  console.log('onDeleteSurveySuccess')
  // Get the current list of user notes and update the UI
  api.retrieveUserNotes()
    .then(getUserNotesSuccess)
    .catch(getUserNotesFailure)
}
const onDeleteSurveyFailure = function (error) {
  console.log('onDeleteSurveyFailure called', error)
}
const getUserNotesFailure = (error) => {
  console.log('getUserNotesFailure failure', error)
  console.error(error)
}

const clearNoteHiveModalParameters = function () {
  $('#hiveNameRequired').text('')
  $('#name').val('')
  const now = new Date()
  const day = ('0' + now.getDate()).slice(-2)
  const month = ('0' + (now.getMonth() + 1)).slice(-2)
  const today = now.getFullYear() + '-' + (month) + '-' + (day)
  console.log('Date: ' + today)
  // $('#notedate').trigger('reset')
  // $('#observation_date').val(today)
  // $('#notedate').attr('value', '')
  // $('observation_date').val(new Date().toISOString().substring(0, 10))
  $('notedate').val(new Date().toISOString().substring(0, 10))
  $('#observe').val('')
  $('#observe').val('')
  $('#futuretask').val('')
  $('#taskstatus').val('')
}
const onCreateNoteButton = function (event) {
  console.log('onCreateNoteButton called')
  event.preventDefault()
  clearNoteHiveModalParameters()
  $('#createNoteModal').modal('show')
}
const onCreateNoteModal = function (event) {
  console.log('onCreateNoteModal called')
  event.preventDefault()
  const data = note.validateNoteData()
  if (data) {
    console.log('validateNoteData Data to create:', data)
    api.createUserNote(data)
      .then(createUserNoteSuccess)
      .catch(createUserNoteFailure)
  } else {
    console.log('validateNoteData returned null')
  }
}

const createUserNoteSuccess = function () {
  console.log('createUserNoteSuccess called')
  // Get the current list of user notes and update the UI
  api.retrieveUserNotes()
    .then(getUserNotesSuccess)
    .catch(getUserNotesFailure)
}

const createUserNoteFailure = function (error) {
  console.log('createUserNoteFailure called', error)
}
const addHandlers = () => {
  $('#add-note-button').on('click', onCreateNoteButton)
  $('#create_note').on('click', onCreateNoteModal)
}

module.exports = {
  getUserNotesSuccess,
  getUserNotesFailure,
  onCreateNoteModal,
  addHandlers
}
