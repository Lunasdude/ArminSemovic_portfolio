$(document).ready(function(){
  var target = "#gallery1";

  $(window).scroll(function(){
    var scrollFromTop = parseInt($(window).scrollTop());
    if (scrollFromTop < 300) { 
      target = "#gallery1"; 
    }else{ 
      target = "#gallery2"; 
    }
  });

  $('#right-button').click(function() {
    event.preventDefault();
    $(target).animate({
      scrollLeft: "+=350px"
    }, "slow");
  });
  $('#left-button').click(function() {
    event.preventDefault();
    $(target).animate({
      scrollLeft: "-=350px"
    }, "slow");
  });
});