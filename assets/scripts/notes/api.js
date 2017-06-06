'use strict'

const store = require('../store')
const config = require('../config')

const getUserNotes = () => {
  console.log('api getUserNotes Called')
  return $.ajax({
    url: config.apiOrigin + '/my-notes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
module.exports = {
  getUserNotes
}
