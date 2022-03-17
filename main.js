$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar ul').toggleClass('active');
  

    });
    $('.btn2').click(function(){
        $('.login-form').addClass('active');

    });
    $('.fa-times').click(function(){
        $('.login-form').removeClass('active');

    });
    $('.btn1').click(function(){
        $('.search-form').toggleClass('active');

    });
    $('.fa-times').click(function(){
        $('.search-form').removeClass('active');

    });
    $('button').click(function(){
        $('.row:nth-child(2)').toggleClass('active');

    });


    

    
   

    
    
    $(window).on('load scroll',function(){
      
        
        if($(window) .scrollTop()>60){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');                
        }    

    });
    $('.slider-container').owlCarousel({
        loop:true,
        margin:5,
        dots:false,
        nav:true,
        
        items:1,
        autoplay:true,
        responsive:{
            400:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            },
        }
    
    
    

    });


    $('.controls .buttons').click(function(){
        $(this).addClass('button-active').siblings().removeClass('button-active');
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.plan .image').show(400);

        }
        else{
            $('.plan .image').not('.' + filter).hide(400);
            $('.plan .image').filter('.' + filter).show(200);
        }

    });
    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header .icon').text('+');
        $(this).children('.icon').text('-');
      
      });



      $('.number').each(function(){
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },{
          duration:4000,
          easing:'swing',
          step:function (now){
              $(this).text(Math. ceil (now) + '+');
            }

        
        });

    });   

   
   
  
});