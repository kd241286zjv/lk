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
});
