(function(){
var popup = document.querySelector(".header__top-menu");
var menuShow = popup.querySelector(".menu-toggle");
var mobileMenu = popup.querySelector(".mobile-menu");


menuShow.addEventListener("click", function(event){
		event.preventDefault();

	popup.classList.toggle("header__top-menu--open");
	menuShow.classList.toggle("menu-toggle--active");
	mobileMenu.classList.toggle("mobile-menu--show");	
});

var mql = window.matchMedia("(min-width: 960px)");
//убираю ненужные классы на мидл ширине окна
function delForWidth(mql){
  if (mql.matches) {
	  mobileMenu.classList.remove("mobile-menu--show");
	  popup.classList.remove("header__top-menu--open");
	  menuShow.classList.remove("menu-toggle--active");
	}
}
//отслеживает срабатывание события
mql.addListener(delForWidth);

})();

