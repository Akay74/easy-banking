console.log('test. it works');

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

$(window).scroll(() => {
    $('nav').toggleClass("scrolled", $(this).scrollTop() > 60);
}); 