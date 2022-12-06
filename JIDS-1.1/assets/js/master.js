menu_icon = document.querySelector(".menu-icon");
overlay = document.querySelector(".overlay");
aside = document.getElementsByTagName("aside");

menu_icon.addEventListener("click", () => {
    overlay.style.display = "block";
    aside[0].style.display = "block";
})

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    aside[0].style.display = "none"
})