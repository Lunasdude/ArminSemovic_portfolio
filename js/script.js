$(document).ready(function(){
  
  $("#hamburger").on("click", function() {
    console.log("mm.. hamborger");
    $("#navbar-mobile-expansion").toggle();
  });

  
  var target = "gallery1";

  $(window).scroll(function(){
    var scrollFromTop = parseInt($(window).scrollTop());
    console.log(scrollFromTop);
    if (scrollFromTop < 300) { 
      target = "gallery1"; 
    }else{ 
      target = "gallery2"; 
    }
  });

  $('#right-button').on("click", function() {
    event.preventDefault();
    $("#" + target).animate({
      scrollLeft: "+=350px"
    }, "slow");
  });
  $('#left-button').on("click", function() {
    event.preventDefault();
    $("#" + target).animate({
      scrollLeft: "-=350px"
    }, "slow");
  });  
});