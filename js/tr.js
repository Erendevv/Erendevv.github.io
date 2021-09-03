$(function () {
   $(window).on('scroll', function () {
      if ($(window).scrollTop()>250) {
         $('.navbar').addClass('solid');
         $('nav li a').addClass('color');
      }
      else {
         $('.navbar').removeClass('solid');
         $('nav li a').removeClass('color');
      }
   });
});
$(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
});
/*Navbar Aktif yapma*/
$(document).ready(function () {

    $('a[href^="#site-main"]').addClass('active');
  
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        var athis = this;
        var target = this.hash,
                menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $('.nav-link').removeClass('active');
            $(athis).addClass('active');
  
        });
  
    });
  
  
    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 0)
        {
            $('a[href^="#site-main"]').addClass('active');
            return;
        }
  
        $('.nav-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
  
    })
  
});
  /*========== LIGHTBOX IMAGE GALLERY ==========*/
$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'imageFadeDuration': 500
    }); 
});

/*BACKGROUND TYPE CODES*/
const texts = ['geliştiriciyim',"freelancerım","tasarımcıyım"];
let count =0;
let index =0;
let currentText ='';
let letter = '';

(function type(){
    if(count === texts.length){
        count =0; // loop
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;       
        index = 0;
    }
    setTimeout(type,300);
})();

/*Carousel*/
$(document).ready(function(){ 
    $('#team-carousel').owlCarousel({ 
        autoplay: true, 
        autoplayHoverPause: true, 
        loop: true, 
        autoplayTimeout: 5000, 
        smartSpeed: 1600,
        dotsSpeed: 1000, 
        responsive : { 
            768 : {
                items: 1
            },
            576 : {
                items: 1
            },
            375 : {
                items: 1
            },
            0 : {
                items: 1
            },
            992 : {
                items: 1
            },
            1200 : {
                items: 1
            }
        }
    });
});

