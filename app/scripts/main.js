window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (!menu.contains(e.target) && !e.target.matches(".header-toggle"))
      menu && menu.classList.remove("is-show");
  }
});

// const menuToggle = document.querySelector(".header-toggle");
// const menuHeader = document.querySelector(".header-menu");
// const expandClass = "is-expand";
// menuToggle.addEventListener("click", function () {
//   menuHeader.classList.add(expandClass);
// });
