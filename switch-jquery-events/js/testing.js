
$(document).on('ready', function() {
  $($('.switch button').attr('class') === 'on').on('click', function(eventObject) {
    $('.switch buton').attr('class', 'off');
    $('body').attr('class', 'dark');
    $('.status').html("Hey who turned off the lights?");
  });
});

$(document).on('ready', function() {
  $($('.switch button').attr('class') === 'off').on('click', function(eventObject) {
    $('.switch button').attr('class', 'on');
    $('body').attr('class', 'light');
    $('.status').html("It's so bright in here!");
  });
});
