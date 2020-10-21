const store =require ('./../store')

const onSignUpSuccess = function(response) {
$('#sign-up-message').text('Thanks for signing up ' + response.user.email)
$('#sign-up-form').trigger('reset')
$('#sign-up-message').show()
}
const onSignUpFailure = function(error) {
  $('#sign-up-message').text('Sign up failed try again')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-message').show()
}
const onSignInSuccess = function(response) {
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
  $('#sign-in-message').show()
}
const onSignInFailure = function(error) {
  $('#sign-in-message').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-in-message').text('Sign in failed try again')
}
const onChangePasswordSuccess = function(response) {
  $('#change-password-message').show()
  $('#change-password-message').text('Password changed!!')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function(error) {
  $('#change-password-message').show()
  $('#change-password').trigger('reset')
  $('#change-password-message').text('Password change failed try again!')
}
const onSignOutSuccess = function(response) {
  $('#sign-out-message').show()
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
  $('#show-anime-message').hide()
  $('#add-anime-message').hide()
  $('#delete-anime-message').hide()
  $('#some-div').hide()
  $('#edit-anime-message').hide()
}
const onSignOutFailure = function(error) {
  $('#sign-out-message').show()
}
const onAddAnimeSuccess = function(response) {
  $('#add-anime-message').text('Successfully added to anime list!')
  $('#add-anime-form').trigger('reset')
  $('#add-anime-message').show()
}
const onAddAnimeFailure = function(error) {
  $('#add-anime-message').text('Failed to add to list, please try again!')
  $('#add-anime-form').trigger('reset')
  $('#add-anime-message').show()
}
const onDeleteAnimeSuccess = function(response) {
  $('#delete-anime-message').text('Successfully removed anime from list!')
  $('#delete-anime-form').trigger('reset')
  $('#delete-anime-message').show()
}
const onDeleteAnimeFailure = function(error) {
  $('#delete-anime-message').text('Failed to remove from list, please try again!')
  $('#delete-anime-form').trigger('reset')
  $('#delete-anime-message').show()
}
const onShowAnimeSuccess = function(response) {
  console.log(response)
const animes = response.animes

let htmlStr = ''
animes.forEach((anime) => {

  const animeHTML = (`
    <div>
      <h3>${anime.title}</h3>
      <ul>
        <li>ID: ${anime._id}</li>
        <li>Title: ${anime.title}</li>
        <li>Translation: ${anime.translation}</li>
        <li>${anime.genre}</li>
        <li>${anime.episodes}</li>
        <li>${anime.reviews}</li>
      </ul>
    </div>
  `)

  htmlStr += animeHTML
})

  $('#some-div').html(htmlStr)
  $('#some-div').show()
  $('#show-anime-message').text('Here is a list of all your anime')
  $('#show-anime').trigger('reset')
  $('#show-anime-message').show()
}
const onShowAnimeFailure = function(error) {
  $('#show-anime-message').text('Failed to get all anime!')
  $('#show-anime-message').show()
}
const onUpdateAnimeSuccess = function(response) {
  $('#edit-anime-message').text('Anime successfully updated!')
  $('#edit-anime-form').trigger('reset')
  $('#edit-anime-message').show()
}
const onUpdateAnimeFailure = function(error) {
  $('#edit-anime-message').text('Anime failed to update.')
  $('#edit-anime-form').trigger('reset')
  $('#edit-anime-message').show()
}

const onAddReviewSuccess = function(response) {
  $('#add-review-message').text('Successfully added a review!')
  $('#add-review-form').trigger('reset')
  // $('#add-review-message').show()
}
const onAddReviewFailure = function(error) {
  $('#add-review-message').text('Failed to add review, please try again!')
  $('#add-review-form').trigger('reset')
  // $('#add-review-message').show()
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
  onUpdateAnimeFailure,
  onAddReviewSuccess,
  onAddReviewFailure
}
