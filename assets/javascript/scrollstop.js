
(function( $ ) {
    $(function() {

            $( window ).scroll(function() {
                
                clearTimeout( $.data( this, "scrollCheck" ) );
                $.data( this, "scrollCheck", setTimeout(function() {
                    // console.log('hello scroll')
                    $('nav').fadeIn('slow')
                }, 500) );

            });

    });

})( jQuery );