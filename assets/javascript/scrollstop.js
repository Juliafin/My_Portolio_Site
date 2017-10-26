
(function( $ ) {
    $(function() {
        // var $output = $( "#output" ),
        //     scrolling = "<span id='scrolling'>Scrolling</span>",
        //     stopped = "<span id='stopped'>Stopped</span>";

            $( window ).scroll(function() {
                
                clearTimeout( $.data( this, "scrollCheck" ) );
                $.data( this, "scrollCheck", setTimeout(function() {
                    console.log('hello scroll')
                    $('nav').fadeIn('slow')
                }, 500) );

            });

    });

})( jQuery );