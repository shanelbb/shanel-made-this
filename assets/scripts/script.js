// select elements needed for events
const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".header-nav");
const designImages = document.querySelector(".design-img");
const designClicked = document.querySelectorAll(".design-img img");

// toggles the nav menu open and closed when menu icon is clicked
menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("open");
  // toggles menu icon between bars and X when clicked
  if (menuIcon.innerHTML.includes("fa-bars")) {
    menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
// toggles menu closed when a link is clicked
navBar.addEventListener("click", () => {
  navBar.classList.toggle("open");
  menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
});
// toggles class to zoom clicked image
designClicked.forEach((img) => {
  img.addEventListener("click", function () {
    designImages.classList.toggle("pos-rel");
    this.classList.toggle("design-click");
  });
});