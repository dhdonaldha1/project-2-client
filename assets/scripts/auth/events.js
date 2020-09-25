const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onAddAnime = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  api.addAnime(data)
    .then(ui.onAddAnimeSuccess)
    .catch(ui.onAddAnimeFailure)
}
const onDeleteAnime = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data.anime.id)
  api.deleteAnime(data.anime.id)
    .then(ui.onDeleteAnimeSuccess)
    .catch(ui.onDeleteAnimeFailure)
}
const onShowAnime = function (event) {
  event.preventDefault()
  // const form = event.target
  // const data = getFormFields(form)
console.log()
  api.showAnime()
    .then(ui.onShowAnimeSuccess)
    .catch(ui.onShowAnimeFailure)
}
const onUpdateAnime = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  // const anime = data.anime
  api.updateAnime(data)
    .then(ui.onUpdateAnimeSuccess)
    .catch(ui.onUpdateAnimeFailure)
}

module.exports ={
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onAddAnime: onAddAnime,
  onDeleteAnime: onDeleteAnime,
  onShowAnime: onShowAnime,
  onUpdateAnime: onUpdateAnime
}
