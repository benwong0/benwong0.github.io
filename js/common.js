$( document ).ready(function() {
 

$(".search-submit").click(function (){
$(this).parent().toggleClass('active');
$('body').toggleClass('search-active');
});


$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $('.mobile-menu').slideToggle();
  return false;
});
// $('.mobile-tabs span').click(function(){
// $(".mobile-tabs span").removeClass('active');
// $(this).addClass('active');
// });


$('.mobile-tabs').on('click', 'span:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active');

});
$(".latest-news-1-trigger").click(function() {
  $('.latest-news').removeClass('active');
  $('.latest-news-1').addClass('active');
});
$(".latest-news-2-trigger").click(function() {
  $('.latest-news').removeClass('active');
  $('.latest-news-2').addClass('active');
});


$(".mobile-menu-list .drop-parent").click(function() {
  // $(".mobile-menu-list .drop-parent").removeClass('active');
 $(this).toggleClass('active').siblings().removeClass('active');
 
});

$(".mobile-select").click(function() {
  $('.mobile-select-dropdown').slideToggle();

});

$('input[type="search"]').on('keyup',function(){
  $('.search-dropdown').show();
  if ($(this).val()=== "") {
   $('.search-dropdown').hide();
 }
}); 


$('.contact-form input,.contact-form textarea').focus(function(){
  $(this).siblings().addClass('active');
});


// $(this).find('label')



window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector("body");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




// function checkSlieder () {
// var item = $('.slider-item');
// if (true) {}
// };
if ($('.slider .slider-item').length > 1) {
  $(".slider-navigations").addClass('active');
  $('.slider').slick({
    slidesToShow: 1,
    prevArrow: $('.slider-left-button'),
    nextArrow: $('.slider-right-button'),
    dots:true,
    // dots:true,
  });
}

  $('.collection-slider').slick({
    slidesToShow: 1,
    prevArrow: $('.collection-slider-left'),
    nextArrow: $('.collection-slider-right'),
    // dots:true,
  });



// $('.popup-overlay, .popup-close').click(function() {
//   var video = $("#player").attr("src");
//   $("#player").attr("src","");
//   $("#player").attr("src",video);
//   $('.popup').hide();
// });
$('.popup-overlay,.popup-close').click(function(){
  $('.videoPlayer')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  $('.popup').hide();
});
$('.popup-overlay,.popup-close').click(function(){
  $('.videoPlayer2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  $('.popup').hide();
});
$('.popup-overlay,.popup-close').click(function(){
  $('.videoPlayer3')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  $('.popup').hide();
});
$('.popup-overlay,.popup-close').click(function(){
  $('.videoPlayer4')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  $('.popup').hide();
});


$('.slider-video-btn').click(function() {
  $('.slider-popup').show();
});
$('.home-video-inner').click(function() {
  $('.home-video-popup').show();
});
$('.videotile1').click(function() {
  $('.home-video-popup-2').show();
});
$('.videotile2').click(function() {
  $('.home-video-popup-3').show();
});


  //  $('.popup-overlay, .popup-close').click(function() {
  //   
  //   $('.yt_player_iframe').each(function(){
  //     this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  //   });
  // });
  $(".popup").on("hide",function(){
    var leg=$('.videoPlayer').attr("src");
    $('.videoPlayer').attr("src",leg);
});
     $('.popup-overlay').click(function(){
      $('.yvideo').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
    });



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



});
