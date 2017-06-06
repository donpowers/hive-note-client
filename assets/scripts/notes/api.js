'use strict'

const store = require('../store')
const config = require('../config')

const retrieveUserNotes = () => {
  console.log('note api getUserNotes Called')
  return $.ajax({
    url: config.apiOrigin + '/my-notes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
const createUserNote = (data) => {
  console.log('note api createUserNotes Called', data)
  return $.ajax({
    url: config.apiOrigin + '/notes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data
  })
}
const onDeleteNote = (id) => {
  console.log('onDeleteNote Called data:', id)
  return $.ajax({
    url: config.apiOrigin + '/notes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
module.exports = {
  retrieveUserNotes,
  createUserNote,
  onDeleteNote
}
