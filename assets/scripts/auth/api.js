const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: "POST",
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: "POST",
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: "PATCH",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: "DELETE",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const addAnime = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animes',
    method: "POST",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const deleteAnime = function (data) {
  return $.ajax({
    url: config.apiUrl + '/anime:ID',
    method: "DELETE",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const showAnime = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animes',
    method: "GET",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  addAnime: addAnime,
  deleteAnime: deleteAnime,
  showAnime: showAnime
}
