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
    $(".swiper-positions").css("display", "none");
    $("#frame-mob-" + id).css("display", "block");
  });

  $(".header-close").click(function (e) {
    $(".pre-header").css("display", "none");
  });

  $(".frame-close").click(function (e) {
    $(".position-frame").css("display", "none");
    $(".positions-row").css("display", "flex");
    $(".swiper-positions").css("display", "block");
  });

  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st < lastScrollTop) {
      //âíèç
      $(".navbar").addClass("sticky-top");
      $(".navbar-collapse").removeClass("show");
      $(".navbar-toggler").attr("aria-expanded", "false");
    } else {
      // ââåðõ
      $(".navbar").removeClass("sticky-top");
    }
    lastScrollTop = st;
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
