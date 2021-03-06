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
const deleteAnime = function (animeId) {
  return $.ajax({
    url: config.apiUrl + `/animes/${animeId}`,
    method: "DELETE",
    headers: {Authorization: 'Bearer ' + store.user.token}
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
const updateAnime = function (data) {
  return $.ajax({
    url: config.apiUrl + `/animes/${data.anime.id}`,
    method: "PATCH",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const addReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animes/reviews',
    method: "POST",
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
  showAnime: showAnime,
  updateAnime: updateAnime,
  addReview: addReview
}
