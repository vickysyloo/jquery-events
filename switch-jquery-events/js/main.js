// $(document).on('ready', function() {
//   $('.switch').on('click', function(eventObject) {
//
//     var x = $('.switch button').attr('class');
//
//     if (x === 'on') {
//       $('.switch button').attr('class', 'off');
//     } else if (x === 'off') {
//       $('.switch button').attr('class', 'on');
//     };
//
//     var y = $('body').attr('class');
//
//     if (y === 'light') {
//       $('body').attr('class', 'dark');
//     } else if (y === 'dark') {
//       $('body').attr('class', 'light');
//     };
//
//     var i = $('.status');
//
//     if (x === 'off') {
//       i.html("It's so bright in here!");
//     } else if (x === 'on') {
//       i.html("Hey who turned off the lights?");
//     }
//   });
//
// });



// testing global method
$(document).on('ready', function() {
  $($('.switch button').attr('class') === 'on').on('click', function(eventObject) {
    $('.switch button').attr('class', 'off');
    $('body').attr('class', 'dark');
    $('.status').html("Hey who turned off the lights?");
  });
});
