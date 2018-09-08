$(document).ready(function(){
  $('.loggedUser').click(function(){
    $('.loggedUserMenu').stop().slideToggle('300');
    $(this).toggleClass('loggedUser-clicked');
  });

  var deadline='2018-09-30 00:00:00';
  $('.timerText').downCount({
  	date: deadline,
  },
  function(){
     /* действие после завершения таймера */
     alert("Время истекло!");
  });

  $('.taskMenu li').click(function(){
    var blockClass = $(this).attr('data-task');
    if($(this).prev().hasClass('succeedTask') || $(this).is(':first-child')){
      $('.taskBlock-active').fadeOut('', function(){
        $(this).removeClass('taskBlock-active');
        $('.taskBlock' + blockClass).fadeIn('');
        $('.taskBlock' + blockClass).addClass('taskBlock-active');
      });
    }
  });
});
