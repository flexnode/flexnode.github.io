$(document).ready(function() {

  // Make navbar translucent when not on cover
  $(window).scroll(function (event) {
    var scrollPosition = $(window).scrollTop();
    var coverHeight = $("#cover").height();
    var navbarHeight = $(".navTop").height();

    if (scrollPosition + navbarHeight > coverHeight) {
      $(".navTop").addClass("is-translucent");
    } else {
      $(".navTop").removeClass("is-translucent");
    }
  });

  // Show which section is looking at on navbar
  $(window).scroll(function (event) {
    var scrollPosition = $(window).scrollTop();
    var navbarHeight = $(".navTop").height();

    $(".navTop a").each(function(index) {
      var anchor = $($(this).attr("href"));
      var anchorTop = anchor.offset().top - navbarHeight;
      var anchorBottom = anchorTop + anchor.height() - 1;

      if (scrollPosition >= anchorTop && scrollPosition <= anchorBottom) {
        $(this).addClass("is-active");
      } else {
        $(this).removeClass("is-active");
      }

    });

  });

  // Scroll to section
  $(".js-scroll-to").click(function (event) {
    event.preventDefault();
    var navbarHeight = $(".navTop").height();
    var anchor = $($(event.currentTarget).attr("href"));
    $("html, body").animate({ scrollTop: anchor.offset().top - navbarHeight + 1 }, 800);
    $(window).scroll();
  });



});