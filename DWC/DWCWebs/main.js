var footerLinks = document.querySelectorAll(".aFooterLink");
var activePage = document.querySelector(".activePage");

var index = 0;

footerLinks.forEach((e) => {
  e.addEventListener("click", CambiarLinks(index));
  index++;
});

var CambiarLinks = function (i) {
  return function f(i) {
    console.log(i);
    footerLinks.forEach((e) => {
      e.classList.remove("activePage");
    });

    footerLinks[i - 1].classList.add("activePage");
  };
};
