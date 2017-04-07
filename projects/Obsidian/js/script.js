// // opens main-menu
$("#hamburger").click(function(){
	$(".main-nav").toggleClass("responsive");
});

// switches between open and close icon on the menu button
$("#hamburger").click(function(){
	$("#hamburger i").toggleClass("fa-times fa-bars");
});

// this snippet makes sure navigation becomes fixed after certain scrolling pointn
$(document).ready(function() {

  $(window).scroll(function () { 

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 250) {
      $('#container').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 251) {
      $('#container').removeClass('navbar-fixed-top');
    }
  });
});
