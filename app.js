const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".navLinks");

menu.addEventListener("click", function () {
  menuItems.forEach((item) => {
    item.classList.toggle("show");
  });
});
