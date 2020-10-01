let htmlStr = ''
animes.forEach((anime) => {

  const animeHtml = (`
    <div>
      <h3>${anime.name}</h3>
      <ul>
        <li>ID: ${anime._id}</li>
        <li>Name: ${anime.name}</li>
        <li>Translation: ${anime.translation}</li>
      </ul>
    </div>
  `)

  htmlStr += animeHTML
})

$('#some-div').html(htmlStr)
