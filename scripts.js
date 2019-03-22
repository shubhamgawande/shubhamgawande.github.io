


 $(document).ready(function(){ 
    // var timeout;
    // timeout = setTimeout(showPage, 2000);

    
    // jQuery(window).load(function() {
    //     $('#loader').fadeOut();
    //     $('#container').fadeIn();
    // });


    // $(window).on("load", function() {
    //     $('#loader').fadeOut('slow');
    //     $('#container').fadeIn(8000);
    //     $('#navigation').addClass('animated fadeIn delay-2s');
    // });


    $('#nav-toggle').click(function(){
        $('#nav-toggle').toggleClass('is-active');
        $('.left-navigation').toggleClass('is-active');
      });

    // $("#sidebar").stick_in_parent();
    // console.log("hello");

    // $('#intro-text').flowtype({

    //      minimum   : 505,
    //      maximum   : 1200,
    //      minFont   : 12,
    //      maxFont   : 40,
    //      fontRatio : 30
    // });



});

