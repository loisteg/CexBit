$(window).ready(function () {
  // WOW
  new WOW().init();

  // Menu
  const hamburger = document.querySelector(".hamburger");
  const container = document.querySelector(".header-container");
  const navMenu = document.querySelector("nav");
  const list = document.querySelector(".header-list");
  const listItem = document.querySelectorAll(".header-list-item");
  const select = document.querySelector(".dropdown");

  hamburger?.addEventListener("click", () => {
    if (container.classList.contains("container-active")) {
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Открыть меню");

      hamburger.classList.remove("hamburger-active");
      container.classList.remove("container-active");
      navMenu.classList.remove("nav-active");
      list.classList.remove("list-active");
      listItem.forEach((item) => item.classList.remove("list-item-active"));
      select.style.display = "inline-block";

      document.body.style.overflow = "visible";
    } else {
      hamburger.setAttribute("aria-expanded", "true");
      hamburger.setAttribute("aria-label", "Закрыть меню");

      hamburger.classList.add("hamburger-active");
      container.classList.add("container-active");
      navMenu.classList.add("nav-active");
      list.classList.add("list-active");
      listItem.forEach((item) => item.classList.add("list-item-active"));
      select.style.display = "none";

      document.body.style.overflow = "hidden";
    }
  });

  // Language
  const selectedLanguage = document.querySelectorAll(".dropdown .option div");
  const languageInput = document.querySelector(".textBox");

  select.addEventListener("click", () => {
    select.classList.toggle("dropdown-active");
  });

  selectedLanguage.forEach((item) => {
    item.addEventListener("click", (e) => {
      languageInput.value = e.target.textContent; // Нужно посмотреть ещё раз
      changeLanguage();
    });
  });

  function changeLanguage() {
    for (let key in langArr) {
      let elem = document.querySelector(".lng-" + key);
      if (elem) {
        elem.innerHTML = langArr[key][languageInput.value];
      }
    }
  }

  changeLanguage();
});
