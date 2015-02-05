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

  $(".js-scroll-to").click(function (event) {
    event.preventDefault();
    var anchor = $("" + $(event.currentTarget).attr("href"));
    $("html, body").animate({ scrollTop: anchor.offset().top - 50 });
    $(window).scroll();
  });



});