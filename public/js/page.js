// Tooltip Init
$(function() {
  $("[data-toggle='tooltip']").tooltip();
});

// make all images responsive
$(function() {
  $("img").addClass("img-responsive");
});

// responsive tables
$(document).ready(function() {
  $("table").wrap("<div class='table-responsive'></div>");
  $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () {
  $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
  $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
$(document).ready(function() {
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.navbar-custom').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
        //if scrolling up...
          if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-visible');
        } else {
          $('.navbar-custom').removeClass('is-visible is-fixed');
        }
      } else {
        //if scrolling down...
        $('.navbar-custom').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
      }
      this.previousTop = currentTop;
      });
  }
});

// vacation spots
var vacations = [
  'Maldives',
  'Istanbul',
  'Patagonia',
  'Tanzania',
  'Rwanda',
  'Philippines',

];
$(document).ready(function() {
  function randVacation() {
    return vacations[Math.floor(Math.random() * vacations.length)];
  };

  function replaceVacation() {
    span = $("#vacations");
  vacation = randVacation();
  oldVacation = span.html();
  if (vacation == oldVacation) {
    return;
  }
  duration = 500;
  span.fadeOut(duration, function() {
    span.html(vacation);
    span.fadeIn(duration);
  });
  };

  replaceVacation();
  var derp = setInterval(replaceVacation, 5000);
});
