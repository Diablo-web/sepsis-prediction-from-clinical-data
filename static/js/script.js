$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".wrapper").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".wrapper").removeClass("nav-toggle");

    if ($(window).scrollTop() > 0) {
      $(".scroll-top").show();
    } else {
      $(".scroll-top").hide();
    }

    // scroll spy

    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");
      let top = $(window).scrollTop();

      if (top > offset && top < offset + height) {
        $(".wrapper ul li a").removeClass("active");
        $(".wrapper").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $(".accordion-header").click(function () {
    $(".accordion .accordion-body").slideUp();
    $(this).next(".accordion-body").slideDown();
    $(".accordion .accordion-header span").text("+");
    $(this).children("span").text("-");
  });
  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

