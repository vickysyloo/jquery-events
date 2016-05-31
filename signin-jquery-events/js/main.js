$(document).on('ready', function() {

  $('.signin').on('click', function() {
    $('.modal').fadeIn('slow');
  });

  $('.close').on('click', function(){
    $('.modal').fadeOut('slow');
  });

  $('.submit').on('click', function(e){
    e.stopPropagation();

    $('.getstarted input').addClass("error");
    $('.getstarted input').attr('placeholder', "Empty!");
  });

  $('.getstarted input').on('click', function(){
    $('.getstarted input').removeClass();
    $('.getstarted input').first().attr('placeholder', "Username");
    $('.getstarted input').last().attr('placeholder', "Password");
  });

  $('input').on('click', function(e) {
    e.stopPropagation();
  })

  $('.modal').on('click', function (e) {
      $(this).fadeOut('slow');
  });

});
