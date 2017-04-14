var portfolioState = {
  currentQuote:0
};



function renderQuote() {

  setTimeout(function() {
    
    let quotes = [
      {
        quote: `Choose a Job you Love, and you will never have to work a day in your life`,
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
    ]; 

    let quoteHTML = `<h1 class="quote">${quotes[portfolioState.currentQuote].quote}</h1>`;
    let authorHTML = `<h2 class="author">${quotes[portfolioState.currentQuote].author}</h2>`;


    if (portfolioState.currentQuote === 2) {
      // write quotes to state then reset quote counter
      $('.quote, .author').fadeOut(1000, function() {
      $('.quote').html(quoteHTML);
      $('.author').html(authorHTML);
      $('.quote, .author').fadeIn(800);
      portfolioState.currentQuote = 0;
      
      });

      
    }

      $('.quote, .author').fadeOut(1000, function() {
      $('.quote').html(quoteHTML);
      $('.author').html(authorHTML);
      $('.quote, .author').fadeIn(800);
      });
      
      
    
    portfolioState.currentQuote+=1;
    renderQuote()
  }, 6000);

}


($(document).ready(function () {

renderQuote();


}));

