const tabs = document.querySelectorAll(".tabs__btn");
const allContent = document.querySelectorAll(".tabs__content-item");
let line = document.querySelector(".tabs__line");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");

      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";

      allContent.forEach((content) => {
        content.classList.remove("active");
      });
      allContent[index].classList.add("active");
    });
    tab.classList.add("active");
  });
});
