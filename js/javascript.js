// let mainMenuHover = document.querySelector(".header__bottom .second")
// let subMenu = document.querySelector(".header__bottom .menu > li > .sub__menu > li");

// subMenu.addEventListener("mouseover", () => {
//   subMenu.style.display = "block";
//   console.log("aa");
// })
$(function () {
  $(".menu > ul > li").mouseover(function () {
      $(this).find(".sub__menu").stop().slideDown(300);
  });
  $(".menu > ul > li").mouseout(function () {
      $(this).find(".sub__menu").stop().slideUp(300);
  });
});