var portfolioState = {
  currentQuote: 0,
  initial: 0,
  quotes: [{
    quote: `"Choose a job you Love, and you will never have to work a day in your life"`,
    author: `~ Confucius`
  },
  {
    quote: `"The heart of human excellence often begins to beat when you discover a pursuit that absorbs you, frees you, challenges you, and gives you a sense of meaning, joy and passion."`,
    author: `~ Terry Orlick`
  },
  {
    quote: `“I have no special talent. I am only passionately curious."`,
    author: `~ Albert Einstein`
  }
  ]
};

function renderQuote() {

  setTimeout(function () {

    let quoteHTML = `${portfolioState.quotes[portfolioState.currentQuote].quote}`;
    let authorHTML = `${portfolioState.quotes[portfolioState.currentQuote].author}`;

    if (portfolioState.currentQuote === 2) {
      // write quotes to state then reset quote counter
      $('.quote, .author').fadeOut(1000, function () {
        $('.quote').html(quoteHTML);
        $('.author').html(authorHTML);
        $('.quote, .author').fadeIn(800);
        portfolioState.currentQuote = 0;

      });
    } else {

      portfolioState.currentQuote += 1;
      $('.quote, .author').fadeOut(1200, function () {
        $('.quote').html(quoteHTML);
        $('.author').html(authorHTML);
        $('.quote, .author').fadeIn(1200);
      });
    }
    renderQuote();
  }, 11000);
}

function accordionListener() {

  $('.accordion').click(function (event) {
    event.preventDefault();

    $(this).next().slideToggle('600');
    $(this).toggleClass('minus');
    
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', 'false');
    } else {
      ($(this).attr('aria-expanded', 'true'));
    }

    if ($(this).attr('aria-selected') === 'true') {
      $(this).attr('aria-selected', 'false');
    } else {
      ($(this).attr('aria-selected', 'true'));
    }

    if ($(this).attr('aria-selected') === 'true') {
      $(this).attr('aria-selected', 'false');
    } else {
      ($(this).attr('aria-selected', 'true'));
    }
   
  
    if ($(this).next().attr('aria-hidden') === 'true') {
      $(this).next().attr('aria-hidden', 'false');
    } else {
      ($(this).next().attr('aria-hidden', 'true'));
    }



  });
}




function navbarActiveListener() {

  $('#nav li').click(function (event) {

    $(this).toggleClass('selected');
    $('#nav li').not($(this)).removeClass('selected');
  });
}

function changeOpacity() {

  if ((window.screen.availHeight <= 732) && (window.screen.availWidth <= 412)) {
   
    if ($(window).scrollTop() > 600) {
      $('.title_container').css('font-size', '10px').stop().animate({
        "opacity": "0"
      },2550, "linear");

    } else if ($(window).scrollTop() < 600) {
      $('.title_container').css('font-size', '12px').stop().animate({
        "opacity": "1"
      }, 2550, "linear");
    }

  } else {

    if (($(window).scrollTop() > 175)) {
      $('.title_container').css('font-size', '10px').stop().animate({
        "opacity": "0"
      }, 350, "linear");

    } else if ($(window).scrollTop() < 175) {
      $('.title_container').css('font-size', '12px').stop().animate({
        "opacity": "1"
      }, 350, "linear");
    }
  }
}

function opacityListenerDeb() {
  $(window).scroll($.throttle( 150, changeOpacity));
}

($(document).ready(function () {
  $(this).scrollTop(0);
  renderQuote();
  accordionListener();
  navbarActiveListener();
  opacityListenerDeb();
  $('div#particles-js').animate({
    opacity: 1
  }, 1000);
}));