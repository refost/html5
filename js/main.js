$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 500,
    draggable: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
      ]
  });

  $(window).on('scroll',function(){
    let wn = $(window).scrollTop();
    if(wn > 40){
      $('.top-fix').css('background-color', '#1a1a1a');
    }
    else{
      $('.top-fix').css('background-color', '');
    }
  });

  $('.burger').click(function(event){
    $('nav').toggleClass('active-menu');
    $('.top-fix').toggleClass('background');
  });

})
