// select elements needed for events
const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".header-nav");
const designImages = document.querySelector(".design-img");
const designClicked = document.querySelectorAll(".design-img img");
console.log(designClicked )

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


function clickHandler (e) {
  e.stopPropagation()
  designImages.classList.toggle("pos-rel");
  e.target.classList.toggle("design-click");
}

designClicked.forEach(img => {
  img.addEventListener('mousedown', clickHandler)
  img.addEventListener('focusin', function() {
    designImages.classList.add("pos-rel");
    img.classList.add("design-click");
    console.log('focusin')
  })
  img.addEventListener("focusout", function(e) {
    designImages.classList.remove("pos-rel");
    img.classList.remove("design-click");
    console.log('focusout')
    })
})


