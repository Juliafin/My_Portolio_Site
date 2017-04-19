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
  var allPanels = $('div.panel').hide();

  $('.accordion').click(function (event) {
    

    if($(this).next().css('display','none')) {

      $(this).next().slideDown();
      return
    };
    if ($(this).next().css('display', 'block')) {
    $(this).next().slideUp();
    return;
    }

  });
};








($(document).ready(function () {
  renderQuote();
  accordionListener();
}));

