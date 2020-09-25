const store =require ('./../store')

const onSignUpSuccess = function(response) {
console.log('YESSSS')
  $('#sign-up-message').text('Thanks for signing up ' + response.user.email)
$('#sign-up-form').trigger('reset')
$('#sign-up-message').show()
}
const onSignUpFailure = function(error) {
  console.log('oops')
  $('#sign-up-message').text('Sign up failed try again')
}
const onSignInSuccess = function(response) {
console.log('SIGNED IN')
store.user = response.user
  $('#sign-in-message').text('Thanks for signing in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-up-message').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#add-anime-form').show()
  $('#delete-anime-form').show()
  $('#show-anime').show()
  $('#edit-anime-form').show()
  $('#sign-up-form').hide()
  $('#sign-out-message').hide()
  $('#sign-in-form').hide()
}
const onSignInFailure = function(error) {
  console.log('failed sign in try again')
  $('#sign-in-message').show()
  $('#sign-in-message').text('Sign in failed try again')
}
const onChangePasswordSuccess = function(response) {
  $('#change-password-message').text('Password changed!!')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function(error) {
  $('#change-password-message').text('Password change failed try again!')
}
const onSignOutSuccess = function(response) {
console.log('signed out')
  $('#sign-out-message').text('Signed out, Please sign in again!')
  $('#sign-out-form').trigger('reset')
  $('#change-password').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-in-message').hide()
  $('#sign-up-message').hide()
  $('#sign-out').hide()
  $('#change-password-message').hide()
  $('#add-anime-form').hide()
  $('#delete-anime-form').hide()
  $('#show-anime').hide()
  $('#sign-up-form').show()
  $('#edit-anime-form').hide()

}
const onSignOutFailure = function(error) {
  console.log('not signed out')

}
const onAddAnimeSuccess = function(response) {
  $('#add-anime-message').text('Successfully added to anime list!')
  $('#add-anime-form').trigger('reset')
}
const onAddAnimeFailure = function(error) {
  $('#add-anime-message').text('Failed to add to list, please try again!')
}
const onDeleteAnimeSuccess = function(response) {
  console.log(response)
  $('#delete-anime-message').text('Successfully removed anime from list!')
  $('#delete-anime').trigger('reset')
}
const onDeleteAnimeFailure = function(error) {
  console.log(response)
  $('#delete-anime-message').text('Failed to remove from list, please try again!')
}
const onShowAnimeSuccess = function(response) {
  console.log(response)
  // var collection = document.getElementById('show-collection');
  // collection.innerHTML = response.animes;
  var arr = response.animes
  var myString = JSON.stringify(arr);
document.getElementById("show-collection").innerHTML = myString;
  $('#show-anime-message').text('Here is a list of all your anime')
  $('#show-anime').trigger('reset')
  // const animeList=response.animes
  // for(let i = 0; i < animeList.length; i++){
  //   console.log(animeList[i])}
//   const animeList = response.animes
//   let collection = ''
//   collection += `$('.show-collection').html(response.animes)
//   `
//
}
const onShowAnimeFailure = function(error) {
  $('#show-anime-message').text('Failed to get all anime!')
}
const onUpdateAnimeSuccess = function(response) {

}
const onUpdateAnimeFailure = function(error) {
  
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onAddAnimeSuccess,
  onAddAnimeFailure,
  onShowAnimeSuccess,
  onShowAnimeFailure,
  onDeleteAnimeSuccess,
  onDeleteAnimeFailure,
  onUpdateAnimeSuccess,
  onUpdateAnimeFailure
}
