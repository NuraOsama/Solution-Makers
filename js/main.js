(function ($) {

    "use strict";
    new WOW().init();

     //preloader
    var  mainStatus  = $('#status'),
     mainBody = $('body'),
     mainPreloader  = $('#preloader');

     window.onload = function() {
      mainStatus.fadeOut();
      mainPreloader.delay(500).fadeOut('slow');
      mainBody.delay(500).css({
          'overflow': 'visible'
      });
     }

    

     //search
    /* $(".search-icon").click(function(){

         $(".form-sub-menu").toggleClass('show');

     });*/



      //sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('.navbar-light').addClass('sticky-top').animate({

            }, 4000);
            $('.top-navbar-brand').addClass('hide');

        } else {
            $('.navbar-light').removeClass('sticky-top').animate({

            }, 4000);
          $('.top-navbar-brand').removeClass('hide');

        }
    });

     //side nav bar
  $(document).ready(function(){
    $(".nav-toggle").click(function(){
      $(".mysidenav").fadeIn();
      $(".sidenav-menu").toggleClass("active");
      $(".nav-toggle-bar").fadeOut();
    });

    
      $(".close-sidenav").click(function(){
        $(".mysidenav").fadeOut();
      $(".sidenav-menu").removeClass("active");
      $(".nav-toggle-bar").fadeIn();
      });

      $(".background-fade").click(function(){
        $(".mysidenav").fadeOut();
      $(".sidenav-menu").removeClass("active");
      $(".nav-toggle-bar").fadeIn();
      });
     
  });
 
//slider
var owl = $('.owl');
owl.owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots:true,
    autoplay:true,
    animateIn: 'flipInX',
    animateOut: 'flipOutX',
  
});

$( ".owl-prev").html('<span class="fas fa-angle-left"></span>');
$( ".owl-next").html('<span class="fas fa-angle-right"></span>');

function setAnimation(_elem, _InOut) {
   
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each(function() {
        var $elem = $(this);
        var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

        $elem.addClass($animationType).one(animationEndEvent, function() {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
        });
    });
}

owl.on('change.owl.carousel', function(event) {
    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-out]");
    setAnimation($elemsToanim, 'out');
});

var round = 0;
owl.on('changed.owl.carousel', function(event) {

    var $currentItem = $('.owl-item', owl).eq(event.item.index);
    var $elemsToanim = $currentItem.find("[data-animation-in]");

    setAnimation($elemsToanim, 'in');
});

//counter
    $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 30000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    });

    //testimonials
$(document).ready(function(){   
    $('.owl-testimonials').owlCarousel({
    items:3,
    nav: true,
    loop: true,
    dots:false,
    autoplay:true,
    margin:15,
    smartSpeed:500,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            
        },
        1440:{
          items:3,

        },
        1260:{
          items:3,

        },
        1024:{
          items:2,

        },
        991:{
          items:1,
      
      },
       
          
          768 : {
  
            items:1,
           
          },
  
          575 : {
  
            items:1,
           
          },
         
          418: {
  
            items:1,
           
           
              
      },
     375: {
  
        items:1,
       
       
          
  },
  320: {
     
    items:1,
   
   
      
  },
  300: {
         
    items:1,
   
   
      
  }  
        
        
    }
   
    });
    $( ".owl-testimonials .owl-nav button.owl-prev").html('<span class="fas fa-arrow-left"></span>');
    $( ".owl-testimonials .owl-nav button.owl-next").html('<span class="fas fa-arrow-right"></span>');
});

//footer silder

$(document).ready(function(){   
    $('.footer-owl').owlCarousel({
        items:4,
        nav: false,
        loop: true,
        dots:false,
        margin:20,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:5,
                nav:true,
                loop:false
            },
            1024 : {
      
                items:5,
               
              },
            991 : {
      
                items:4,
               
              },
              768 : {
      
                items:3,
               
              },
      
              575 : {
      
                items:2,
               
              },
             
              418: {
      
                items:1,
               
               
                  
          },
         375: {
      
            items:1,
           
           
              
      },
      320: {
         
        items:1,
       
       
          
      },
      300: {
         
        items:1,
       
       
          
      }  
            
            
        }
       
    });
});

//scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {
     $(".auto-scroll-to-top").addClass("visible");                    
   } else {
       $(".auto-scroll-to-top").removeClass("visible");
   }        
  });
   
 $(".auto-scroll-to-top").click(function(){
   $("html, body").animate({scrollTop: 0}, 1000);
 });

//search select
$(".js-example-placeholder-single").select2();
$(".select-arab-result").select2({
language: {
  noResults: function () {
      return "لايوجد نتيجة لهذا البحث";
  }
}
});
//hijri calender

/*$('.txtHijriDate').calendarsPicker({

  calendar: $.calendars.instance('islamic'),
  dateFormat: 'yyyy-mm-dd',
  
});*/


//milady calender
$('.txtmiladyDate').calendarsPicker($.extend(
  {

      dateFormat: 'dd/mm/yyyy',
  },
  $.calendarsPicker.setDefaults($.calendarsPicker.regionalOptions[''])));
  $('.txtmiladyDate-ar').calendarsPicker($.extend(
    {
        calendar: $.calendars.instance('gregorian', 'ar-EG'),
        dateFormat: 'yyyy/mm/dd'
    },
    $.calendarsPicker.regionalOptions['ar']));  
//scroll
 /* $("body").niceScroll({
    scrollspeed: 80,
    cursorcolor:"#ec5751",
     cursorwidth:"9px",
     zindex: 50000,
      background:"#dddddd",
      cursorborder:"1px solid #ec5751",
})*/
  
})(jQuery);
