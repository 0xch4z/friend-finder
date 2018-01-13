(function() {

  $('.modal').modal()

  function getSliderValues() {
    const sliders = $('.slider input')
    const values = []
    sliders.each(() => values.push($(this).attr('value')))
    return values
  }

  $('#submit button').click(e => {
    e.preventDefault()

    const scores = getSliderValues()
    $.post('/api/friends', { scores }, data => {
      $('#result-name').text(data.name)
      $('#result-image').attr('src', data.photo)
      $('#result-modal').modal('open')
    }, 'json')
  })

})()
