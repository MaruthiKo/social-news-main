const menu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const background = document.querySelector(".container")
function toggleMenu() {
    background.classList.toggle("menu-open")
    if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


// .container{
//     width: 100%;
//     display: grid;
//     justify-content: center;
//     align-items: center;
//     grid-template-columns: repeat(3,1fr);
//     grid-template-rows: 1fr 2fr 1fr;
//     grid-template-areas: "nav nav nav"
//     "hero hero news"
//     "blogs blogs blogs";
// }

// .navbar{
//     grid-area: navbar;
// }

// .hero{
//     grid-area: hero;
// }

// .new{
//     grid-area: news;
// }

// .blogs{
//     grid-area: blogs;
// }