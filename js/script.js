const dropdown = document.querySelectorAll(".dropdown");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".navigation nav");
const overlay = document.querySelector(".overlay");

dropdown.forEach((dropList) =>
  dropList.addEventListener("click", () => {
    const dropdownUpArrow = dropList.querySelector(".up-arrow");
    const dropdownDownArrow = dropList.querySelector(".down-arrow");
    const dropdownList = dropList.querySelector(".dropdown-menu");
    dropdownUpArrow.classList.toggle("disappear-arrow");
    dropdownDownArrow.classList.toggle("appear-arrow");
    dropdownList.classList.toggle("appear-dropdown");
  })
);

openMenu.addEventListener("click", () => {
  openMenu.classList.remove("active");
  navBar.classList.add("active");
  overlay.classList.add("active");
  closeMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.remove("active");
  navBar.classList.remove("active");
  overlay.classList.remove("active");
  openMenu.classList.add("active");
});
