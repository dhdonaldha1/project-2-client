'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#add-anime-form').hide()
  $('#delete-anime-form').hide()
  $('#show-anime').hide()
  $('#edit-anime-form').hide()
  $('#add-review-form').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#add-anime-form').on('submit', authEvents.onAddAnime)
  $('#delete-anime-form').on('submit', authEvents.onDeleteAnime)
  $('#show-anime').on('submit', authEvents.onShowAnime)
  $('#edit-anime-form').on('submit', authEvents.onUpdateAnime)
  $('#add-review-form').on('submit', authEvents.onAddReview)
})
