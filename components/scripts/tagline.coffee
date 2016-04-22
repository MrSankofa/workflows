//this code searches for the class tagline in the HTML and
//put the item string in that set of tags.

do fill = (item = 'The most creative minds in Art') ->
  $('.tagline').append "#{item}"
fill

