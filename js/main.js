$(document).ready(function(){
   
    //Wow JS integration
    new WOW().init();

    //Mobile Menu Toggle Function
    $('#nav').click(function(){
        $('.navWrapper').toggle();
        $('.navWrapper').addClass('wow');
        $('.navWrapper').addClass('animated');
        $('.navWrapper').addClass('fadeInUpBig');
        $('.navWrapper').addClass('fast');
        $('.navWrapper ul li').addClass('wow');
        $('.navWrapper ul li').addClass('animated');
        $('.navWrapper ul li').addClass('fadeInUp');
        $('.navWrapper ul li').addClass('delay-1s');
    })
    
    });