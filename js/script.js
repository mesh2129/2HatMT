$(function () {

  // Splash Screen

  $(window).on("load", function () {
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
      top: wHeight / 2 - 2.5,
      left: wWidth / 2 - 200
    });

    function animateLoader() {
      if (o <= 400) {
        loader.animate(
          {
            width: o
          },
          10,
          function () {
            o += 3;
            animateLoader();
          }
        );
      } else if (o === 402) {
        loader.animate({
          left: 0,
          width: "100%"
        });
        loader.animate({
          top: "0",
          height: "100vh"
        });
        setTimeout(function () {
          $(".loader-wrapper").fadeOut(500);
          $(".loader").fadeOut(500);
        }, 3000);
      }
    }

    animateLoader();
  });

  // Splash Screen

  // sticky

  const $header = $("header");
  const scrollThreshold = 10;

  // Add scroll event listener
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > scrollThreshold) {
      $header.addClass("shrink");
    } else {
      $header.removeClass("shrink");
    }
  });
  // sticky

  // Cursor

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
      t.style.top = n.clientY + "px",
      e.style.left = n.clientX + "px",
      e.style.top = n.clientY + "px",
      i.style.left = n.clientX + "px",
      i.style.top = n.clientY + "px";
  });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (var r = document.querySelectorAll("a, button"), a = r.length - 1; a >= 0; a--) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  // Cursor

  $(".option").hover(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });


  $(".button").click(function () {
    var buttonId = $(this).attr("id");
    $("#modal-container").removeAttr("class").addClass(buttonId);
    $("body").addClass("modal-active");
  });

  $("#modal-container").click(function () {
    $(this).addClass("out");
    $("body").removeClass("modal-active");
  });

});


let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.addEventListener("click", () => {
  if (nav.style.transform != "translateX(0%)") {
    nav.style.transform = "translateX(0%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }
});


let toggleIcon = document.querySelector(".menuIcon");

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("toggle");
});

$(document).ready(function () {
  function animateLoader() {
    var loader = $(".loader");

    loader.animate({
      left: 0,
      width: "100%"
    }).animate({
      top: "0",
      height: "100vh"
    });

    setTimeout(function () {
      $(".loader-wrapper").fadeOut(500);
      $(".loader").fadeOut(500);
    }, 3000);
  }

  animateLoader();

  // Splash Screen


  // Cursor

  var cursor = document.getElementById("cursor"),
    cursor2 = document.getElementById("cursor2"),
    cursor3 = document.getElementById("cursor3");

  document.body.addEventListener("mousemove", function (event) {
    var x = event.clientX + "px",
      y = event.clientY + "px";

    cursor.style.left = x;
    cursor.style.top = y;
    cursor2.style.left = x;
    cursor2.style.top = y;
    cursor3.style.left = x;
    cursor3.style.top = y;
  });

  function addHoverClass() {
    cursor2.classList.add("hover");
    cursor3.classList.add("hover");
  }
});



