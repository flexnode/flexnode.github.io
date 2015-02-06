$(document).ready(function() {

  // Make navbar translucent when not on cover
  $(window).scroll(function (event) {
    var scroll_position = $(window).scrollTop();
    var cover_height = $("#cover").height();
    if (scroll_position + 50 > cover_height) {
      $(".navTop").addClass("is-translucent");
    } else {
      $(".navTop").removeClass("is-translucent");
    }
  });

  // Show which section is looking at on navbar
  $(window).scroll(function (event) {
    var scroll_position = $(window).scrollTop();

    $(".navTop a").each(function(index) {
      var anchor = $($(this).attr("href"));
      var anchor_top = anchor.offset().top - 50;
      var anchor_bottom = anchor_top + anchor.height() -1;

      if (scroll_position >= anchor_top && scroll_position <= anchor_bottom) {
        $(this).addClass("is-active");
      } else {
        $(this).removeClass("is-active");
      }

    });

  });

  // Scroll to section
  $(".js-scroll-to").click(function (event) {
    event.preventDefault();
    var anchor = $($(event.currentTarget).attr("href"));
    $("html, body").animate({ scrollTop: anchor.offset().top - 50 }, 1000);
    $(window).scroll();
  });



});