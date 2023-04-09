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

function lockScroll() {
  if ($("body").hasClass("lock-scroll")) {
    $("body").removeClass("lock-scroll");
  } else {
    $("body").addClass("lock-scroll");
  }
}

$("a.nav-link").on("click", function () {
  $("body").toggleClass("lock-scroll");
});
