$(document).ready(function () {
  // Get the current URL
  var currentUrl = window.location.pathname;

  $(".navbar li a").each(function () {
    var linkUrl = $(this).attr("href");
    if (currentUrl === linkUrl) {
      $(this).addClass("active");
    }
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
