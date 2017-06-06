'use strict'
const store = require('../store')

const validateNoteData = function () {
  console.log('validateNoteData called')
  const name = $('#name').val()
  const notedate = $('#notedate').val()
  const observation = $('#observe').val()
  const futuretask = $('#futuretask').val()
  const taskduedate = $('#taskduedate').val()
  const taskstatus = $('#taskstatus').val()
  if (!name) {
    $('#hiveNameRequired').text('Hive Name is required, please supply a name')
    return null
  } else {
    $('#hiveNameRequired').text('')
    noteCreate.note.hive_name = name
    noteCreate.note.observation_date = notedate
    noteCreate.note.observe = observation
    noteCreate.note.task = futuretask
    noteCreate.note.task_due_date = taskduedate
    noteCreate.note.task_status = taskstatus
    console.log('validateNoteData changes are: ', noteCreate.note)
    return noteCreate
  }
}
const updateFormWithNoteData = function (id) {
  const data = findNoteByID(id)
  console.log('updateFormWithNoteData called', data)
  $('#name').val(data.hive_name)
  $('#notedate').val(data.observation_date)
  $('#observe').val(data.observe)
  $('#futuretask').val(data.task)
  $('#taskduedate').val(data.task_due_date)
  $('#taskstatus').val(data.task_status)
  // This modal is shared update it's role
  $('#modalTitle').text('Update Note')
  $('#create_note').html('Update')
  $('#createNoteModal').modal('show')
}
const findNoteByID = function (idMatch) {
  let result
  let i
  for (i in store.notes) {
    const id = store.notes[i].id
    if (id == idMatch) {
      return store.notes[i]
    }
  }
  result
}
const noteCreate = {
  'note': {
    'hive_name': '',
    'observation_date': '',
    'observe': 1,
    'task': 'unknown',
    'task_due_date': '',
    'task_status': ''
  }
}
module.exports = {
  validateNoteData,
  updateFormWithNoteData
}
