'use strict'

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
  validateNoteData
}
