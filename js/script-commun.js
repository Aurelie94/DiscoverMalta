//Menu Toggle---------------------------------------------------------------------------------

var btn = document.querySelector(".toggle-btn");
var nav = document.querySelector(".nav");

btn.onclick= function (e){
	nav.classList.toggle("nav_open");
	
}


