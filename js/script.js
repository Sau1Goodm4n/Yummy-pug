const header = document.querySelector(".header-flex");
const burger = header.querySelector(".header-burger");
const list = header.querySelector("nav");

burger.addEventListener("click", (e) => {
   burger.classList.toggle("active");
   header.classList.toggle("active");
   list.classList.toggle("active");
   document.querySelector("body").classList.toggle("lock");
})

header.addEventListener("click", (e) => {
   if ((e.target.localName === "img") || (e.target.localName === "a") && header.classList.contains("active")) {
      burger.classList.remove("active");
      header.classList.remove("active");
      list.classList.remove("active");
      document.querySelector("body").classList.remove("lock");
   }
})