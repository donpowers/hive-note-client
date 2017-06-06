'use strict'

const store = require('../store')
const notesUI = require('../notes/ui')

const signUpSuccess = (data) => {
  console.log('signUpSuccess calledd: ', data)
  // Clear the form data entered
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}

const signUpFailure = (error) => {
  $('#sign-up').trigger('reset')
  showModalMessage('You were unable to sign-up. Please Try Again')
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('Sign-in success: ', data)
  // Clear the form data entered
  $('#sign-in').trigger('reset')
  store.user = data.user
  console.log('Token: ', store.user.token)
  showUserLoggedlMessage('Welcome ' + store.user.email)
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  notesUI.getUsersNotes()
}

const signInFailure = (error) => {
  console.log('Sign In Failure')
  showModalMessage('You were unable to sign-in. Please Try Again or Sign Up.')
  $('#sign-in').trigger('reset')
  console.error(error)
}
const signOutSuccess = () => {
  console.log('Sign Out success: ')
  // clean up the stored value
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#sign-up ').trigger('reset')
  $('#change-password').hide()
  showUserLoggedlMessage('Welcome! Please Sign In or Sign Up.')
}
const signOutFailure = (error) => {
  showModalMessage('You were unable to sign-out. Please Try Again or Sign Up.')
  console.error(error)
}
const changePasswordSuccess = () => {
  // Clear the form data entered
  console.log('Change Password success')
  showModalMessage('Your password has been udpated.')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = (error) => {
  console.log('Change Password Out Failure')
  showModalMessage('You were unable to change your password. Please Try Again.')
  $('#change-password').trigger('reset')
  console.error(error)
}
const showModalMessage = function (message) {
  $('#infoModalText').text(message)
  $('#infoModal').modal('show')
}
const showUserLoggedlMessage = function (message) {
  $('#currentUser').text(message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess
}
