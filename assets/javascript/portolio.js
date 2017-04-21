var portfolioState = {
  currentQuote: 0,
  initial: 0,
  quotes: [
    {
      quote: `Choose a job you Love, and you will never have to work a day in your life`,
      author : `~ Confucius`
    },
    {
      quote:`The heart of human excellence often begins to beat when you discover a pursuit that absorbs you, frees you, challenges you, and gives you a sense of meaning, joy and passion.`,
      author: `~ Terry Orlick`
    },
    {
      quote:`“I have no special talent. I am only passionately curious.`,
      author: `~ Albert Einstein`
    } 
  ] 
};

function renderQuote() {

  setTimeout(function() {
    

    let quoteHTML = `${portfolioState.quotes[portfolioState.currentQuote].quote}`;
    let authorHTML = `${portfolioState.quotes[portfolioState.currentQuote].author}`;

    if (portfolioState.currentQuote === 2) {
      // write quotes to state then reset quote counter
      $('.quote, .author').fadeOut(1000, function() {
        $('.quote').html(quoteHTML);
        $('.author').html(authorHTML);
        $('.quote, .author').fadeIn(800);
        portfolioState.currentQuote = 0;
      
      }); 
    } else {

      portfolioState.currentQuote+=1;
      $('.quote, .author').fadeOut(1200, function() {
        $('.quote').html(quoteHTML);
        $('.author').html(authorHTML);
        $('.quote, .author').fadeIn(1200);
      });
    }
    renderQuote();
  }, 11000);
}

function accordionListener () {
  $('.accordion').click(function (event) {
    event.preventDefault();

    $(this).next().slideToggle('1600');
    $(this).toggleClass('minus');
  });
};

function navbarActiveListener () {

  $('#nav li').click(function(event){
 
    $(this).toggleClass('selected');
    $('#nav li').not($(this)).removeClass('selected');
  });
}

function titleContainerOpacity () {
  
    $(window).scroll(function(event) {

 
  if ($(window).scrollTop() > 225) {
   $('.title_container').css('font-size', '10px').stop().animate({"opacity":"0"}, 50, "linear")
  }
  else if ($(window).scrollTop() < 225){
            $('.title_container').css('font-size', '12px').stop().animate({"opacity":"1"}, 50, "linear")
  }

    })

}
    






($(document).ready(function () {
  renderQuote();
  accordionListener();
  navbarActiveListener();
  titleContainerOpacity();

  
  $('div#particles-js').animate({
    opacity: 1
  },1000);
    
 

}));

