'use strict'

const store = require('../store')
const noteListTemplate = require('../templates/note-list.handlebars')
const note = require('./note')
const api = require('./api')

const getUserNotesSuccess = (data) => {
  console.log('getUserNotesSuccess success', data)
  // clear out all user notes
  $('.userNotes').empty()
  store.notes = data.notes
  console.log('data.notes success', data.notes)
  // console.log('getUserNotesSuccess noteTree: ', store.noteTree)
  if (data.notes.length !== 0) {
    note.createNoteTree()
    console.log('building template')
    const showNoteListTemplate = noteListTemplate({ noteBranch: store.noteTree.noteBranch })
    $('.userNotes').append(showNoteListTemplate)
    // Add the event for delete to the class name for the delete button
    // when it gets called parse the ID from the button name
    // that was added in the handlebars template
    $('.delete-note').on('click', function (event) {
      event.preventDefault()
      const data = event.target.id.split('-')
      // console.log('Delete Note ID: ', data[2])
      api.onDeleteNote(data[2])
        .then(onDeleteNoteSuccess)
        .catch(onDeleteNoteFailure)
    })
    $('.update-note').on('click', function (event) {
      event.preventDefault()
      const data = event.target.id.split('-')
      console.log('Update Note ID: ', data[2])
      store.updateNoteID = data[2]
      note.updateFormWithNoteData(data[2])
    })
    // Hide all notes and just show hive name on initial load
    if (store.userFirstTime) {
      $('.note-toggle').toggle()
      store.userFirstTime = false
    }
  }
}
const onDeleteNoteSuccess = function () {
  console.log('onDeleteNoteSuccess')
  // Get the current list of user notes and update the UI
  api.retrieveUserNotes()
    .then(getUserNotesSuccess)
    .catch(getUserNotesFailure)
}
const onDeleteNoteFailure = function (error) {
  console.log('onDeleteNoteFailure called', error)
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
  // $('notedate').val(today)
  document.getElementById('notedate').value = today
  $('#observe').val('')
  $('#futuretask').val('')
  $('#taskstatus').val('')
  // $('input[name=status]').attr('checked', false)
  document.getElementById('radio1').checked = false
  document.getElementById('radio2').checked = false
  // document.getElementById('taskstatus').value = ''
  // $('taskduedate').val('')
  document.getElementById('taskduedate').value = 'yyyy-mm-dd'
}
const onCreateNoteButton = function (event) {
  console.log('onCreateNoteButton called')
  event.preventDefault()
  clearNoteHiveModalParameters()
  $('#modalTitle').text('Create Note')
  $('#create_note').html('Create')
  $('#createNoteModal').modal('show')
}
// When the Note modal create button is clicked, determine which
// action we should do, Create or Update
const onNoteModal = function (event) {
  console.log('onCreateNoteModal called', event)
  event.preventDefault()
  const buttonAction = $('#' + event.target.id).text()
  console.log('onCreateNoteModal called name buttonAction:' + buttonAction)
  if (buttonAction === 'Create') {
    const data = note.validateNoteData()
    if (data) {
      console.log('validateNoteData Data to create:', data)
      api.createUserNote(data)
        .then(createUserNoteSuccess)
        .catch(createUserNoteFailure)
    } else {
      console.log('validateNoteData returned null')
    }
  } else {
    console.log('Update Note Called')
    const updateData = note.validateNoteData()
    if (updateData) {
      console.log('validateNoteData Data to update:', updateData)
      console.log('validateNoteData ID to update:', store.updateNoteID)
      api.updateUserNote(updateData, store.updateNoteID)
        .then(updateUserNoteSuccess)
        .catch(updateUserNoteFailure)
    } else {
      console.log('validateNoteData returned null')
    }
  }
}

const createUserNoteSuccess = function () {
  console.log('createUserNoteSuccess called')
  // close the modal
  $('#createNoteModal').modal('hide')
  // Get the current list of user notes and update the UI
  api.retrieveUserNotes()
    .then(getUserNotesSuccess)
    .catch(getUserNotesFailure)
  showModalMessage('New note successfullly created')
}

const updateUserNoteSuccess = function () {
  console.log('updateUserNoteSuccess called')
  // close the modal
  $('#createNoteModal').modal('hide')
  // Get the current list of user notes and update the UI
  api.retrieveUserNotes()
    .then(getUserNotesSuccess)
    .catch(getUserNotesFailure)
  showModalMessage('Note updated successfullly')
}

const updateUserNoteFailure = function (error) {
  console.log('updateUserNoteSuccess called', error)
}

const createUserNoteFailure = function (error) {
  console.log('createUserNoteFailure called', error)
}
const showModalMessage = function (message) {
  $('#infoModalText').text(message)
  $('#infoModal').modal('show')
}
const onNoteNameClick = function (event) {
  // console.log('note-branch clicked')
  // This will show or hide the notes
  $(event.target).children().toggle()
}
const addHandlers = () => {
  $('#add-note-button').on('click', onCreateNoteButton)
  $('#create_note').on('click', onNoteModal)
  $('#sign-up-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#sign-in-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#create-questions-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#change-password-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  // $('h4').click(function () {
  //   console.log('note-branch clicked', this)
  //   $(this).toggleClass.on('click', onclick)('highlight')
  // })
  // Need to use document since we use handlebars.  The DOM is
  // updated and since the node did not exist straight jquery
  // does not work
  $(document).on('click', '.note-hive-name', onNoteNameClick)
}

module.exports = {
  getUserNotesSuccess,
  getUserNotesFailure,
  onNoteModal,
  addHandlers
}
