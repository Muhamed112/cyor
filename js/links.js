$(document).ready(function () {
  // Get the current URL
  var currentUrl = window.location.pathname;

  $(".navbar li a").each(function () {
    var linkUrl = $(this).attr("href");
    if (currentUrl === linkUrl) {
      $(this).addClass("active");
    }
  });

  $(".tab-link").click(function (e) {
    e.preventDefault();
    var pattern = /#.+/gi; //use regex to get anchor(==selector)
    var contentID = e.target.toString().match(pattern)[0]; //get anchor

    $('.nav-tabs li a[data-bs-target="' + contentID + '"]').tab("show");
  });

  $(".test-link").click(function (e) {
    var pattern = /#.+/gi; //use regex to get anchor(==selector)
    var contentID = e.target.toString().match(pattern)[0]; //get anchor
    $('.nav-tabs li a[data-bs-target="' + contentID + '"]').tab("show");
  });

  $(".frame-open").click(function (e) {
    var id = $(this).attr("id");
    $(".positions-row").css("display", "none");
    $("#frame-" + id).css("display", "block");
  });

  $(".frame-close").click(function (e) {
    $(".position-frame").css("display", "none");
    $(".positions-row").css("display", "flex");
  });

  $(".ppl-box").click(function (e) {
    var id = $(this).attr("id");
    if (id === "text-" + id) {
      $("#text-" + id).css("display", "block");
    } else {
      $("#text-" + id).css("display", "none");
    }
    $(this).toggleClass("ppl-box-active");
  });

  function countUp() {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 7000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }
  $(function () {
    "user strict";
    var bAnimate = true;
    $(".count").css("opacity", "0.0");

    $(window).scroll(function () {
      // console.log("scroll top=" + $(this).scrollTop());
      // console.log("div offset top=" + $("div").offset().top);
      var scrolling = $(this).scrollTop(),
        divoffset = $(".count").offset().top,
        screenBottom = scrolling + $(window).height(),
        elemBottom = divoffset + $(".count").outerHeight(); //
      if (screenBottom > elemBottom) {
        if (bAnimate) {
          $(".count").css("opacity", "1.0");
          countUp();
          bAnimate = false;
        }
      }
    });
  });
});

const servicesToggle = document.getElementById("services-link");
const servicesDiv = document.getElementById("services-div");
servicesDiv.style.display = "none";
servicesToggle.onclick = function () {
  if (servicesDiv.style.display !== "none") {
    servicesDiv.style.display = "none";
  } else {
    servicesDiv.style.display = "block";
  }
};

const resourcesToggle = document.getElementById("resources-link");
const resourcesDiv = document.getElementById("resources-div");
resourcesDiv.style.display = "none";
resourcesToggle.onclick = function () {
  if (resourcesDiv.style.display !== "none") {
    resourcesDiv.style.display = "none";
  } else {
    resourcesDiv.style.display = "block";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
