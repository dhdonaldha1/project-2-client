const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onAddAnime = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addAnime(data)
    .then(ui.onAddAnimeSuccess)
    .catch(ui.onAddAnimeFailure)
}
const onDeleteAnime = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteAnime(data.anime.id)
    .then(ui.onDeleteAnimeSuccess)
    .catch(ui.onDeleteAnimeFailure)
}
const onShowAnime = function (event) {
  event.preventDefault()
  api.showAnime()
    .then(ui.onShowAnimeSuccess)
    .catch(ui.onShowAnimeFailure)
}
const onUpdateAnime = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateAnime(data)
    .then(ui.onUpdateAnimeSuccess)
    .catch(ui.onUpdateAnimeFailure)
}
const onAddReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addReview(data)
    .then(ui.onAddReviewSuccess)
    .catch(ui.onAddReviewFailure)
}
module.exports ={
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onAddAnime: onAddAnime,
  onDeleteAnime: onDeleteAnime,
  onShowAnime: onShowAnime,
  onUpdateAnime: onUpdateAnime,
  onAddReview: onAddReview
}
