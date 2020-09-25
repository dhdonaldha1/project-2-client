let htmlStr = ''
// assuming 'fruits' is an Array of fruit Objects
// FOR EACH anime object, create an HTML string and add it to an HTML string
//   - this could also be done with a for loop!
fruits.forEach((fruit) => {
  // create multiline string using 'template literals' (backticks)
  // you can create an HTML string for each anime
  // this can look however you want! You can use any HTML elements but
  //   the idea is that you are plugging in values from your anime into HTML
  const fruitHtml = (`
    <div>
      <h3>${fruit.name}</h3>
      <ul>
        <li>ID: ${fruit._id}</li>
        <li>Translation: ${fruit.color}</li>
      </ul>
    </div>
  `)
  // add each smaller HTML string to build up one master HTML string
  htmlStr += fruitHTML
})
// place your newly built HTML string in the DOM
$('#some-div').html(htmlStr)
