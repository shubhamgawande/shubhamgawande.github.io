$(document).ready(function(){
   
    //Wow JS integration
    new WOW().init();

    //Mobile Menu Toggle Function
    $('#nav').click(function(){
        $('.navWrapper').toggle();
        $('.navWrapper ul li').addClass('wow');
        $('.navWrapper ul li').addClass('animated');
        $('.navWrapper ul li').addClass('fadeInUp');
    })
    
    });