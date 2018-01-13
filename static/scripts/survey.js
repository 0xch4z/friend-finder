'use strict';

(function () {

  function getSliderValues() {
    var _this = this;

    var sliders = $('.slider input');
    var values = [];
    sliders.each(function () {
      return values.push($(_this).attr('value'));
    });
    return values;
  }

  $('#submit button').click(function (e) {
    e.preventDefault();

    var scores = getSliderValues();
    $.post('/api/friends', { scores: scores }, function (data) {
      $('#result_name').text(data.name);
      $('#result_image').attr('src', data.photo);
      $('#result_modal').modal('open');
    }, 'json');
  });
})();