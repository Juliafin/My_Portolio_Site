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
  ],
  headers: {
    projects: false,
    aboutMe: false,
    references: false
  }
};

// Animates the quotes
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

// Listens for clicks on accordion buttons and expands the hidden sections
function accordionListener() {

  $('.accordion').click(function (event) {
    event.preventDefault();

    $(this).closest('.project_panel').next().slideToggle('600');
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
  
    if ($(this).next().attr('aria-hidden') === 'true') {
      $(this).next().attr('aria-hidden', 'false');
    } else {
      ($(this).next().attr('aria-hidden', 'true'));
    }

  });
}


// Listens for clicks on navbar to determine active element
function navbarActiveListener() {

  $('#nav li').click(function (event) {

    $(this).toggleClass('selected');
    $('#nav li').not($(this)).removeClass('selected');
  });
}


// Changes opacity of top div based on scroll position
function changeOpacity() {

  if ((window.screen.availHeight <= 732) && (window.screen.availWidth <= 412)) {
   
    if ($(window).scrollTop() > 400) {
      $('.title_container').css('font-size', '10px').stop().animate({
        "opacity": "0"
      },550, "linear");

    } else if ($(window).scrollTop() < 400) {
      $('.title_container').css('font-size', '12px').stop().animate({
        "opacity": "1"
      }, 550, "linear");
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


function headerListener() {
  
  $(window).scroll($.throttle( 150, () => {
    let projectsHeaderVisible = $('h1.projects_header').visible(true)
    let aboutMeHeaderVisible = $('h1.about_me_header').visible(true)
    let referencesHeaderVisible = $('h1.references_header').visible(true)
    
      if (!portfolioState.headers.projects && projectsHeaderVisible) {
        $('h1.projects_header').addClass('left');
        portfolioState.headers.projects = true;
      }

      if (!portfolioState.headers.aboutMe && aboutMeHeaderVisible) {
        $('h1.about_me_header').addClass('left');
        portfolioState.headers.aboutMe = true;
      }

      if (!portfolioState.headers.references && referencesHeaderVisible) {
        $('h1.references_header').addClass('left');
        portfolioState.headers.references = true;
      }
  }));
}


// Makes nav fade when scrolling
function navOpacity(event) {
  setTimeout( () => {
    $('nav').fadeOut('slow')
   }, 300
  )
}


function scrollNavListener() {
  $(window).scroll($.throttle(150, navOpacity));
}


function opacityListenerDeb() {
  $(window).scroll($.throttle( 150, changeOpacity));
}


// Initialize app
($(document).ready(function () {
  $(this).scrollTop(0);
  renderQuote();
  accordionListener();
  navbarActiveListener();
  opacityListenerDeb();
  scrollNavListener();
  $('div#particles-js').animate({
    opacity: 1
  }, 1000);
  headerListener();
}));